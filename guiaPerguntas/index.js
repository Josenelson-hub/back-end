// Requisicoes de todas as bibliotecas
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const connection = require('./database/database')
const perguntaModel = require("./database/Pergunta")

//conectando com o banco de dados
connection
    .authenticate()
    .then(() => {
        console.log('Conexao feita com sucesso');
    })
    .catch(() => {
        console.log('Falha na conexao');
    })

// Usando arquivos estaticos
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Setando bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//setando rotas
app.get("/",(req,res) => {
    res.render("index")
})

app.get("/perguntar",(req,res) => {
    res.render("perguntar")
})

app.post("/salvarpergunta",(req,res) => {
    let titulo = req.body.titulo
    let descricao = req.body.descricao
})

// Subindo servidor
app.listen(8080, ()=> {
    console.log("Servidor rodando");
})