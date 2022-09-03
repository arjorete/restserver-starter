const {response} = require('express'); //sacamos la esponse para ayudarnos al codificar

const usersGet = (req, res = response)=> {
    res.json({ //mandamos un archivo json con informaciónS
        "msg":"get desde controller "
    });
}

const userPut = (req, res)=> {
    res.status(400).json({
        "msg":"put llamado desde el controller "
    });
}

const userPost = (req, res)=> {
    res.status(201).json({
        "msg":"post llamado desde controller"
    });
  }

const userDelete = (req, res)=> {
    res.json({
        "msg":"delete llamado desde controller "
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