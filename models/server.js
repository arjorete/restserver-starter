//Crearemos una clase para trabajar con la creación de un servidor y express
const express = require('express');

class Server { 

    constructor(){ // en el constructor llamaremos crearemos la instancia necesaria
         this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();
        //Rutas e mi aplicación
         this.routes();//llamamos el método que nos creara las rutas de acceso

    }

    middlewares(){
        //directorio publico
        this.app.use(express.static('public'));//elegimos la carepta public como ruta por deefecto
    }

    routes(){
        this.app.get('/api', (req, res)=> {
            res.json({
                "msg":"get api"
            });
          });
        this.app.put('/api', (req, res)=> {
            res.json({
                "msg":"put api"
            });
          });
        this.app.post('/api', (req, res)=> {
            res.json({
                "msg":"post api"
            });
          });
        this.app.delete ('/api', (req, res)=> {
            res.json({
                "msg":"delete api"
            });
          });
        this.app.patch ('/api', (req, res)=> {
            res.json({
                "msg":"patch api"
            });
          });
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('Servidor corriendo en el puerto',this.port)
        });
    }
}

module.exports = Server;