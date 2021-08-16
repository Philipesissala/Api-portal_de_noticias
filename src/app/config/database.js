const sequelize = require('sequelize');
const conn = new sequelize('portaldb', 'root', 'S1ssala23', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    sequelize,
    conn
}