const {response} = require('express'); //sacamos la esponse para ayudarnos al codificar

const usersGet = (req, res = response)=> {
    //vamos a desestructurar y seleccionar los parametros requeridos
    const {q,nombre = 'no name',apikey,page = 1, limit = 10} = req.query;

    res.json({ //mandamos un archivo json con informaciónS
        "msg":"get desde controller ",
        q,
        nombre,
        apikey,
        page,
        limit
    });
}

const userPut = (req, res)=> {
    const {id} = req.params;//extraemos los datos enviados en los parametros como id

    res.status(400).json({
        "msg":"put llamado desde el controller ",
        id
    });
}

const userPost = (req, res)=> {
    const {nombre,edad,gustos} = req.body;//extraemos los valores que requerimos del usuario ignorando los demas

    res.status(201).json({
        "msg":"post llamado desde controller",
        nombre,
        edad,
        gustos
    });
  }

const userDelete = (req, res)=> {
    const {id} =req.params;//Extraemos el valor enviado en los parametros como id

    res.json({
        "msg":"delete llamado desde controller ",
        id
    });
}

const userPatch = (req, res)=> {
    res.json({
        "msg":"patch llamado desde controller"
    });
  }


module.exports = {
    usersGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}