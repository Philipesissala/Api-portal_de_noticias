const express = require('express');

const routes = express.Router();

const UsersController = require('./controllers/UsersController');

routes.get('/listAllUsers', UsersController.index);

routes.post('/createUser', UsersController.create);

routes.put('/updateUser/:id', UsersController.update);

routes.delete('/destroyUser/:id', UsersController.destroy);

module.exports = routes;