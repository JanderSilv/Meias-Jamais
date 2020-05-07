const express = require('express');
const ImageUpload = require('./ImageUpload')
const routes = express.Router();

const userControler = require('./../controllers/userControler')
const postControler = require('./../controllers/postControler')
const curtidasControler = require('./../controllers/curtidasControler')
const comentatiosControler = require('./../controllers/comentariosControler')

//#region USER

// retorna todos os usuarios
routes.get('/user', userControler.index)

// retorna um usuário específico
routes.get('/user/:id', userControler.get)

// retorna os seguidores de um usuário
routes.get('/user/getFollower/:id', userControler.getFollower)

// retorna os usuários que este usuário segue
routes.get('/user/getFollowing/:id', userControler.getFollowing)

//delete um usuário
routes.delete('/user/remove/:id', userControler.delete)

// para de seguir um usuário
routes.delete('/user/remFollower', userControler.remFolower)

//atualiza os dados de um usuario
routes.put('/user/update', userControler.update)

//buscar curtidas do usuario
routes.get('/user/curtidas/:id', curtidasControler.getByUser)

//buscar comentarios do usuario
routes.get('/user/comentarios/:id', comentatiosControler.getByUser)

routes.post('/user/create', userControler.create)
/*
cria um novo usuário
{
   "nome":"Ruan",
   "nome_de_usuario":"rn",
   "descricao":"nice guy",
   "dt_aniversario":"2000-03-16"
}
*/

routes.post('/user/addFollower', userControler.addFolower)
/*
passa a seguir um usuário
{
    "id":1,
	"id_seguido":2
}
*/


routes.post('/upload/image', ImageUpload.single('file'))
//#endregion

//#region POST
routes.get('/post/:id', postControler.get)

routes.post('/post/create', postControler.create)

routes.delete('/post/remove/:id', postControler.remove)

routes.put('/post/update', postControler.update)
//#endregion

//#region COMENTARIO

routes.get('/comentarios', comentatiosControler.index)
routes.get('/comentarios/posts/:id', comentatiosControler.getByPost)
routes.delete('/comentatios/remove/:userId/:postId', comentatiosControler.remove)
routes.put('/comentarios/update', comentatiosControler.update)
routes.post('/comentarios/create', comentatiosControler.create)

//#endregion

//#region CURTIDAS

//buscar uma curtida pelo id do post
routes.get('/curtidas/posts/:id', curtidasControler.getByPost)

//curte um post
routes.post('/curtidas/create/:userId/:postId', curtidasControler.create)

//remove a curtida de um post
routes.delete('curtidas/remove/:userId/:postId', curtidasControler.remove)

//#endregion

module.exports = routes;