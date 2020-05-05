const express = require('express');

const routes = express.Router();

const userControler = require('./../controllers/userControler')


routes.get('/user', userControler.index)        // retorna todos os usuarios
routes.get('/user/:id', userControler.get)      // retorna um usuário específico

routes.get('/user/getFollower/:id', userControler.getFollower)      // retorna os seguidores de um usuário
routes.get('/user/getFollowing/:id', userControler.getFollowing)        // retorna os usuários que este usuário segue

routes.post('/user/create', userControler.create)       // cria um novo usuário
/*
{
   "nome":"Ruan",
   "nome_de_usuario":"rn",
   "descricao":"nice guy",
   "dt_aniversario":"2000-03-16"
}
*/

routes.post('/user/addFollower', userControler.addFolower)          // passa a seguir um usuário
/*
{
    "id":1,
	"id_seguido":2
}
*/

routes.delete('/user/remove/:id', userControler.delete)     //delete um usuário
routes.delete('/user/remFollower', userControler.remFolower)        // para de seguir um usuário


module.exports = routes;