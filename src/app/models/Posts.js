const bd = require('../config/database');
const Users = require('./Users');

const posts = bd.conn.define('postagens', {
    titulo: bd.sequelize.STRING,
    usuario_id: {
        type: bd.sequelize.INTEGER,
        foreignKey: true
    },
    tempo: bd.sequelize.INTEGER,
    conteudo: bd.sequelize.TEXT
});


module.exports = posts;

//posts.sync({ force: true });