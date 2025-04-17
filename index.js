let express = require("express");
let app = express()

app.get('/buscar/:id?', (req, res) => {
      const id = req.params.id;
    
      res.send(`📝 Nome: ${id}, Categoria: ${id}`);
    });

app.listen(8080, (error) => {
   if(error) console.log('Ocorreu um erro');
   else console.log('tudo certo');
})