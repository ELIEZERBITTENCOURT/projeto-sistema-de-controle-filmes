//importando express
const express = require('express');
//criando servidor
const server = express();
//função para o sevrer reconhecer o json
server.use(express.json());


//lista de filmes
const filmes = ['Pocahontas', 'Mulan', 'Meu malvado favorito'];

//retorna um filme
server.get('/filmes/:index', (req,res) =>{
    const {index} = req.params;

    return res.json(filmes[index]);
});

//retorna todos os filmes
server.get('/filmes', (req, res) =>{
    return res.json(filmes)
});

//acrescenta um novo filme
server.post('/filmes', (req, res) =>{
    const {name} = req.body;
    filmes.push(name);

    return res.json(filmes);
});

//usuario
const usuarios = ['usuario1'];

//inserir novo usuarios
server.post('/usuarios', (req, res) =>{
    const {name} = req.body;
    usuarios.push(name);

    return res.json(usuarios);
});

//retorna todos os usuarios
server.get('/usuarios', (req, res) =>{
    return res.json(usuarios)
});

//deletar usuario
server.delete('/usuarios/:index', (req, res) => {
    const {index} = req.params;

   usuarios.splice(index, 3);
   return res.json({message: "O ususario foi deletado"});
});


//direcionado a porta
server.listen(8080);