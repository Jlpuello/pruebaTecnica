const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'jlpuello',
    port: 3306,
    database: 'pruebatecnicaDB'
});


conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error: '+ err)
    }
    else{
        console.log('conexion Exitosa!')
    }
});

module.exports = conexion;