const {Router} = require('express'); //estaemos una funnción de express llamada router
const { usersGet, userPut, userPost, userDelete, userPatch } = require('../controllers/users');

const router = Router();//Esta función nos permite manejar las rutas desde este archivo

router.get('/', usersGet); //Referenciamos la función 

router.put('/:id', userPut);

router.post('/',userPost);

router.delete ('/:id',userDelete );

router.patch ('/', userPatch);

module.exports = router;