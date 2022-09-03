//Crearemos una clase para trabajar con la creación de un servidor con express y cors
const express = require('express');
const cors = require('cors');


class Server { 

    constructor(){ // en el constructor llamaremos crearemos la instancia necesaria
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        //Middlewares
        this.middlewares();
        //Rutas e mi aplicación
         this.routes();//llamamos el método que nos creara las rutas de acceso

    }

    middlewares(){
        //cors
        this.app.use(cors());

        //directorio publico
        this.app.use(express.static('public'));//elegimos la carepta public como ruta por deefecto
    }

    routes(){
        this.app.use(this.usersPath, require('../routes/users')); //redirigimos el path '/api/users' al archivo en routes/user
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto',this.port)
        });
    }
}

module.exports = Server;