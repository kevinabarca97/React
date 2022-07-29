require('dotenv').config();

const { conexion } = require ('./config/conexionDB');
const cors = require('cors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

conexion();
var app = express();
app.use(cors());
app.use(logger('dev'));
//convertir body a formato json
app.use(express.json());
//recibiendo datos desde url-form-encoded
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', indexRouter);

module.exports = app;
