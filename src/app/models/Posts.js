const bd = require('../config/database');
const users = require('./Users');

const posts = bd.conn.define('postagens', {
    id: {
        type: bd.sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: bd.sequelize.STRING,
    usuario_id: {
        type: bd.sequelize.INTEGER,
        foreignKey: true
    },
    tempo: bd.sequelize.INTEGER,
    conteudo: bd.sequelize.TEXT
});

posts.associate = () => {
    posts.belongsTo(users,
        { foreignKey: 'user_id', as: 'users' });
};


module.exports = posts;

posts.sync({ force: true });