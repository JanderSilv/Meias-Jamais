const express = require('express');

const routes = express.Router();

const userControler = require('./../controllers/userControler')


routes.get('/user',userControler.index)
routes.get('/user/:id',userControler.get)
routes.get('/user/getFollower',userControler.getFollower)
routes.get('/user/getFollowing',userControler.getFollowing)

routes.post('/user/create',userControler.create)
routes.post('/user/addFollower',userControler.addFolower)

routes.delete('/user/remFollower',userControler.remFolower)
routes.delete('/user/remove/:id',userControler.delete)


module.exports = routes;