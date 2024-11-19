const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
    logging: console.log,
});



sequelize.sync({ force: true })
    .then(() => {
        console.log('Banco de Dados sincronizado com sucesso.');
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });


module.exports = sequelize;
