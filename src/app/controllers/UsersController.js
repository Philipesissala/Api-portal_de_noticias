const Users = require('../models/Users');
const Posts = require('../models/Posts');

module.exports = {
    async index(req, res) {
        try {
            const user = await Users.findAll({
                include: { model: Posts, as: 'users' },
            })
            return res.status(200).json(user);

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: `Ocorreu um erro ${error}` });
        }
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
