const express = require('express');

const routes = express.Router();

const UsersController = require('./controllers/UsersController');
const PostsController = require('./controllers/PostsController');

//Rotas usuarios
routes.post('/createUser', UsersController.create);

routes.get('/listAllUsers', UsersController.index);

routes.put('/updateUser/:id', UsersController.update);

routes.delete('/destroyUser/:id', UsersController.destroy);

//Rotas Postagens
routes.post('/createPost', PostsController.create);

routes.get('/listPosts', PostsController.index);

module.exports = routes;