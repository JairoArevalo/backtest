//Punto de entrada a la aplicacion 
//Requieres importacion de librerias que ocupamos

var express = require('express');
var moongose = require('mongoose');

//Inicializar librerias
var app = express();


//conexion a la base de datos
moongose.connection.openUri('mongodb://localhost:27017/reservasDB', (err, res)=>{
    if (err) {
        throw(err);
    }else {
        console.log('Base de datos: \x1b[32m%s\x1b[0m ',' online');
    }
});

//Rutas

app.get('/', (req, res, next)=>{
    res.status(200).json({
        ok: true,
        mensaje: 'Petion realizada correctamente'
    })
})


//Escuchar peticiones
app.listen(3000, () => {
    console.log('Expres server corriendo puerto 3000: \x1b[32m%s\x1b[0m ',' online');
    
})