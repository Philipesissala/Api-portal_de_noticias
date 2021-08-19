const db = require('../config/database');
const Posts = require('../models/Posts');
const Users = require('../models/Users');

try {
    Posts.belongsTo(Users, {
        constraint: true,
        foreignKey: 'id_usuario'
    });

    db.conn.sync({ force: true });

} catch (error) {
    console.log(error)
}

module.exports = {
    async index(req, res) {
        return await Posts.findByPk(1,{ include: Users },).then((datas) => {
            return res.json(datas);
        }).catch((error) => {
            return res.json({ menssagem: `Erro ${error}` });
        });
    },

    async create(req, res) {
        const { titulo, autor, tempo, conteudo } = req.body;

        Posts.create({
            titulo,
            autor,
            tempo,
            conteudo
        }).then(() => {
            return res.json({ menssagem: "sucesso" });
        }).catch((error) => {
            return res.json({ menssagem: `Erro ${error}` });
        });
    },

    async upadate(req, res) {
        const id = req.params.id;
        const { titulo, autor, tempo, conteudo } = req.body;

        return await Posts.update({
            titulo,
            autor,
            tempo,
            conteudo
        }, {
            where: { id }
        }).then(() => {
            return res.json({ menssagem: "sucesso" });
        }).catch((error) => {
            return res.json({ menssagem: `Erro ${error}` });
        });
    },

    async destroy(req, res) {
        const id = req.params.id;

        return await Posts.destroy({
            where: { id }
        }).then(() => {
            return res.json({ menssagem: "sucesso" });
        }).catch((error) => {
            return res.json({ menssagem: `Erro ${error}` });
        });
    }
}