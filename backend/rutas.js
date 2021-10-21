const rutas = require('express').Router()



// asignacion de rutas


rutas.get('/', function(req,res){
    res.send('hola desde la ruta de inicio')
})



module.exports= rutas;