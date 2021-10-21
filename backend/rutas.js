const router = require('express').Router()
const conexion = require('./config/conexion')
var session = require('express-session');


// asignacion de rutas

// login usuarios



// get usuarios
router.get('/',(req,res)=>{
    let sql =  'select * from usuarios'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//get usuario espesifico

router.get('/:id',(req,res)=>{
    const {id} = req.params
    let sql =  'select * from usuarios where ID= ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
    
    
})

// agregar un usuario

router.post('/add/',(req, res)=>{
    const{usuario, contraseña, nombre, apellido, telefono, ID_rol, fecha_creacion,estado} = req.body

    let sql = `insert into  usuarios(usuario, contraseña, nombre, apellido, telefono, ID_rol, fecha_creacion,estado)
     values ('${usuario}','${contraseña}','${nombre}','${apellido}','${telefono}','${ID_rol}','${fecha_creacion}','${estado}')`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err 
        else{
            res.json({status: 'usuario agregado'})
        }
    }) 
})

module.exports= router;