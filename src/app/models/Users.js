const bd = require('../config/database');
const posts = require('./Posts');

const users = bd.conn.define('usuarios', {
    id: {
        type: bd.sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: bd.sequelize.STRING,
    senha: bd.sequelize.STRING,
});

users.associate = () => {
    users.hasMany(posts,
        { foreignKey: 'user_id', as: 'posts' });
};

module.exports = users

users.sync({ force: true });