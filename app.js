
const colors = require('colors');
const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
console.clear();

console.log(argv);

//option ('l') listar boolean opcional por defecto falso 
//mandar como argumento a crear archivo si listar es true
// listar la salida, de lo contrario, no se listar la tabla en consola solo el mensake de creacion

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));








