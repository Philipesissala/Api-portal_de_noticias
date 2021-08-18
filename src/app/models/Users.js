const bd = require('../config/database');
const post = require('./Posts');

const users = bd.conn.define('usuarios', {
    nome: bd.sequelize.STRING,
    senha: bd.sequelize.STRING,
});

module.exports = users

//users.sync({ force: true });