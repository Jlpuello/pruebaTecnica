require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);


const app = express();

// admitir

app.use(express.json())

//config

app.set('port', port)

//rutas

app.use('/api', require('./rutas'))


//iniciar express

app.listen(app.get('port'), (error)=>{
    if(error){
        console.log('Error al iniccar el servidor')
    }
    else{
        console.log('servidor iniciado en el puerto: '+ port)
    }
})
