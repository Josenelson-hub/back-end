// Utiliza o sequelize
const Sequelize = require('sequelize')

//Cria uma conexao com o banco de dados
const connection = new Sequelize('guiaperguntas', 'root', 'Neko280623.', {
    host: 'localhost',
    dialect: 'mysql'
})

// exporta a conexao
module.exports = connection;