const validator = require('validator');

const validarArticulo = (parametros) => {

    let validarTitulo = !validator.isEmpty(parametros.titulo) && validator.isLength(parametros.titulo, {min: 5, max: 30});
    let validarContenido = !validator.isEmpty(parametros.contenido);
        
    if(!validarTitulo || !validarContenido) {
        throw new Error("Informacion no valida");
    }


}

module.exports = {
    validarArticulo
}