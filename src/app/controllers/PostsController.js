const Posts = require('../models/Posts');
console.log(Posts)

module.exports = {
    async index(req, res) {
        return await Posts.findAll({ include: { association: 'post' } },).then((datas) => {
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