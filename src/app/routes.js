const express = require('express');

const routes = express.Router();

const UsersController = require('./controllers/UsersController');
const PostsController = require('./controllers/PostsController');

//Rotas usuarios
routes.get('/listAllUsers', UsersController.index);

routes.post('/createUser', UsersController.create);

routes.put('/updateUser/:id', UsersController.update);

routes.delete('/destroyUser/:id', UsersController.destroy);

//Rotas Postagens
routes.get('/listPosts', PostsController.index);

routes.post('/createPost', PostsController.create);

routes.put('/updatePost/:id', PostsController.upadate);

routes.delete('/destroyPost/:id', PostsController.destroy);

module.exports = routes;