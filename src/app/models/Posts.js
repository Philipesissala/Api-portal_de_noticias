const bd = require('../config/database');
const Users = require('./Users');

const posts = bd.conn.define('postagens', {
    titulo: bd.sequelize.STRING,
    usuario_id: {
        type: bd.sequelize.INTEGER,
        foreignKey: true
    },
    tempo: bd.sequelize.INTEGER,
    conteudo: bd.sequelize.STRING
});

posts.associate = (models) => {
    posts.belongsTo(Users, { foreignKey: 'usuario_id', as: 'user' })
}

module.exports = posts;

//posts.sync({ force: true });