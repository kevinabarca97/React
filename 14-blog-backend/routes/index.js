
const multer = require('multer');

var express = require('express');
var router = express.Router();

const almacenamiento = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, './imagenes/articulos/');

  },
  filename: (req, file, cb) => {
    cb(null, 'articulo-' + Date.now() + '-' + file.originalname);
  }
});

const subidas = multer({
  storage: almacenamiento
});
const ArticuloControlador = require("../controllers/ArticuloController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({msg: 'prueba conexion exitoso'});
});

// RUTAS ARTICULOS
router.get('/obtenerArticulos/:ultimos?', ArticuloControlador.obtenerArticulos);
router.get('/obtenerArticuloId/:id?', ArticuloControlador.obtenerArticuloId);
router.post('/crearArticulos', ArticuloControlador.crearArticulos);
router.delete('/borrarArticulo/:id?', ArticuloControlador.borrarArticulo);
router.put('/editarArticulo/:id?', ArticuloControlador.editarArticulo);
router.post('/subirImagenArticulo/:id?', [subidas.single("archivo")], ArticuloControlador.subirImagenArticulo);
router.get('/imagen/:fichero?', ArticuloControlador.imagen);
router.get('/buscador/:busqueda?', ArticuloControlador.buscador);


module.exports = router;
