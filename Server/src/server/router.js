const express = require('express');

const routes = express.Router();

const userControler = require('./../controllers/userControler')


routes.post('/user/create',userControler.create)
routes.delete('/user/remove/:id',userControler.delete)
routes.get('/user',userControler.index)
routes.get('/user/:id',userControler.get)
routes.post('/user/addF',userControler.addFolower)
routes.post('/user/remF',userControler.remFolower)

module.exports = routes;