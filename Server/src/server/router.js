const express = require('express');
const ImageUpload = require('./ImageUpload')
const routes = express.Router();

const userControler = require('./../controllers/userControler')
const postControler = require('./../controllers/postControler')
const curtidasControler = require('./../controllers/curtidasControler')
const comentatiosControler = require('./../controllers/comentariosControler')
const interesseControler = require('./../controllers/interessesControler')

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
routes.delete('/comentarios/remove/:userId/:postId', comentatiosControler.remove)
routes.put('/comentarios/update', comentatiosControler.update)
routes.post('/comentarios/create', comentatiosControler.create)

//buscar comentarios do usuario
routes.get('/comentarios/user/:id', comentatiosControler.getByUser)

//#endregion

//#region CURTIDAS

//buscar uma curtida pelo id do post
routes.get('/curtidas/posts/:id', curtidasControler.getByPost)

//curte um post
routes.post('/curtidas/create/:userId/:postId', curtidasControler.create)

//remove a curtida de um post
routes.delete('curtidas/remove/:userId/:postId', curtidasControler.remove)

//buscar curtidas do usuario
routes.get('/curtidas/user/:id', curtidasControler.getByUser)

//#endregion

//#region IMAGENS
routes.post('/upload/image', ImageUpload.single('file'))

//#endregion

//#region INTERESSES

//busca os interesses de um usuario
routes.get('/interesses/user/:id', interesseControler.getByUser)

//busca os usuarios interessados em um post
routes.get('/interesses/post/:id', interesseControler.getByPost)

//adiciona um usuario na lista de interessados
routes.post('/interesses/create/:userId/:postId', interesseControler.create)

//remove um usuario da lista de interessados
routes.delete('/interesses/remove/:userId/:postId', interesseControler.remove)

//remove todos os interessados de um post
routes.delete('/interesses/post/remove/:postId', interesseControler.removeByPost)

//remove todos os interesses de um usuario
routes.delete('/interesses/user/remove/:postId', interesseControler.removeByUser)
//#endregion
module.exports = routes;