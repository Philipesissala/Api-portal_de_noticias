const Users = require('../models/Users');
const Posts = require('../models/Posts');

module.exports = {
    async index(req, res) {
        return await Users.findAll().then((datas) => {
            res.json(datas);
        }).catch((error) => {
            res.json({ menssagem: `Erro ${error}` });
        });
    },

    async create(req, res) {
        const { nome, senha } = req.body;
        return await Users.create({
            nome,
            senha
        }).then(() => {
            return res.json({ menssagem: "sucesso" });
        }).catch((error) => {
            return res.json({ menssagem: `Erro ${error}` });
        });
    },

    async update(req, res) {
        const id = req.params.id;
        const { nome, senha } = req.body;

        return await Users.update({
            nome, senha
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

        return await Users.destroy(
            {
                where: { id }
            }).then(() => {
                return res.json({ menssagem: "sucesso" });
            }).catch((error) => {
                return res.json({ menssagem: `Erro ${error}` });
            });
    }
}
