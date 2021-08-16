const bd = require('../config/database');

const posts = bd.conn.define('postagens', {
    titulo: bd.sequelize.STRING,
    autor: bd.sequelize.STRING,
    tempo: bd.sequelize.INTEGER,
    conteudo: bd.sequelize.STRING
});

module.exports = posts;

//posts.sync({ force: true });