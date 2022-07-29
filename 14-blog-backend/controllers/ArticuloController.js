const Articulo = require('../models/ArticulosSchema');
const { validarArticulo } = require('../helpers/ValidarArticulo');
const path = require('path');
const fs = require("fs");


const obtenerArticulos = (req, res) => {
    const consulta = Articulo.find({});

    if(req.params.ultimos){
        consulta.limit(parseInt(req.params.ultimos));
    }
    
    consulta.sort({fecha: -1})
            .exec((error, articulos) =>{
                if(error || !articulos) {
                    return res.status(400).json({
                        status: "error",
                        mensaje: "articulo no guardado"
                    });
                }

                return res.json({
                    status: "success",
                    articulos,
                    mensaje: "articulo recuperado exitosamente"
                });
            });
}

const obtenerArticuloId = (req, res) => {
    let id = req.params.id;

    const consulta = Articulo.findById(id, (error, articulo) =>{
        if(error || !articulo) {
            return res.status(400).json({
                status: "error",
                mensaje: "articulo no encontrado"
            });
        }

        return res.json({
            status: "success",
            articulo,
            mensaje: "articulos recuperados exitosamente"
        });
    });
}

const crearArticulos = (req, res) => {
    const parametros = req.body;
    try{
        validarArticulo(parametros);
        const articulo = new Articulo(parametros);
        articulo.save((error, articuloGuardado)=>{
            if(error || !articuloGuardado) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "articulo no guardado"
                });
            }

            return res.json({
                status: "success",
                articulo: articuloGuardado,
                mensaje: "articulo guardado exitosamente"
            });
        });

    } catch(error) {
        return res.status(400).json({
            status: "error",
            mensaje: "faltan datos por enviar"
        });
    }
}

const borrarArticulo = (req, res) => {
    let id = req.params.id;

    Articulo.findOneAndDelete({_id: id}, (error, articuloBorrado) =>{
        if(error || !articuloBorrado) {
            return res.status(400).json({
                status: "error",
                mensaje: "articulo no encontrado"
            });
        }

        return res.json({
            status: "success",
            articulo: articuloBorrado,
            mensaje: "articulo borrado exitosamente"
        });

    });
}

const editarArticulo = (req, res) => {
    let articuloId = req.params.id;

    let articulo = req.body;

    try{
        validarArticulo(articulo);
        //new devuelve el objeto nuevo actualizado
        Articulo.findOneAndUpdate({_id: articuloId}, articulo, {new: true}, (error, articuloEditado) =>{
            if(error || !articuloEditado) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "articulo no editado"
                });
            }

            return res.json({
                status: "success",
                articulo: articuloEditado,
                mensaje: "articulo editado exitosamente"
            });
        });

    } catch(error) {
        res.status(400).json({
            status: "error",
            mensaje: "datos erroneos"
        });
    }


}

const subirImagenArticulo = (req, res) => {
    if(!req.file && !req.files) {
        return res.status(400).json({
            status: 'error',
            mensaje: 'peticion invalida'
        });
    }
    let nombreArchivo = req.file.originalname;
    let archivoSplit = nombreArchivo.split("\.");
    let archivoExtension = archivoSplit[1];


    if(archivoExtension != "png" && archivoExtension != "jpg" && archivoExtension != "jpeg" && archivoExtension != "gif" ) {
        fs.unlink(req.file.path, (error) => {
            return res.status(400).json({
                status: 'error',
                mensaje: 'imagen invalida'
            });
        });
    } else {
        let articuloId = req.params.id;

        Articulo.findOneAndUpdate({_id: articuloId}, {imagen: req.file.filename}, {new: true}, (error, articuloEditado) =>{
            if(error || !articuloEditado) {
                return res.status(400).json({
                    status: "error",
                    mensaje: "articulo no editado"
                });
            }

            return res.json({
                status: "success",
                articulo: articuloEditado,
                mensaje: "articulo editado exitosamente"
            });
        });
    }

}


const imagen = (req, res) => {
    let fichero = req.params.fichero;

    let rutaFisica = "./imagenes/articulos/" + fichero;

    fs.stat(rutaFisica, (error,existe) =>{
        if(existe) {
            return res.sendFile(path.resolve(rutaFisica));
        } else {
            return res.status(404).json({
                status: 'error',
                mensaje: 'imagen no existe'
            });
        }
    });

}

const buscador = (req, res) => {
    let busqueda = req.params.busqueda;
    Articulo.find({
        "$or": [
            {
                "titulo": {
                    "$regex": busqueda, "$options": "i"
                }
            },
            {
                "contenido": {
                    "$regex": busqueda, "$options": "i"
                }
            }
        ]
    }).sort({fecha: -1})
    .exec((error, articulosEncontrados) =>{
        if(error || !articulosEncontrados || articulosEncontrados.length === 0) {
            return res.status(404).json({
                status: 'error',
                mensaje: 'no se encontraron articulos'
            });
        }

        return res.json({
            status: "success",
            articulos: articulosEncontrados,
            mensaje: "articulos encontrados exitosamente"
        });
    });
}

module.exports = {
    obtenerArticulos,
    crearArticulos,
    obtenerArticuloId,
    borrarArticulo,
    editarArticulo,
    subirImagenArticulo,
    imagen,
    buscador
}