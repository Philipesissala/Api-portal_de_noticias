const bd = require('../config/database');
const Posts = require('./Posts');

const users = bd.conn.define('usuarios', {
    nome: bd.sequelize.STRING,
    senha: bd.sequelize.STRING,
});

users.associate = (models) => {
    users.hasOne(Posts, { foreignKey: 'usuario_id', as: 'post' })
}

module.exports = users

//users.sync({ force: true });