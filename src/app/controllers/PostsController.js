const Posts = require('../models/Posts');

module.exports = {
    async index(req, res) {
        return await Posts.findAll().then((datas) => {
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
    }
}