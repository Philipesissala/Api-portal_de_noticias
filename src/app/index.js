(async () => {
    const db = require('./config/database');
    const Posts = require('./models/Posts');
    const Users = require('./models/Users');

    try {
        Posts.belongsTo(Users, {
            constraint: true,
            foreignKey: 'id_usuario'
        });

        const results = await db.conn.sync({ force: true });
 
    } catch (error) {
        console.log(error)
    }
    const resltsCreate = await Users.create({
        nome: 'Filipe Sissala',
        senha: 'fi123'
    });

    const id_usuario = resltsCreate.id;
    const resultsCreate2 = await Posts.create({
        titulo: 'Javascript o novo rei da web',
        id_usuario: id_usuario,
        tempo: 20,
        conteudo: 'O todo poderoso javascript continua dando passos incriveis para o futuro...'
    });

    const Produto = await Users.findByPk(resultsCreate2.id, { include: Posts })
    console.log(resultsCreate2.id)
})();
