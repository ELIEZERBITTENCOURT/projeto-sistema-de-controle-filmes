#PROJETO-SISTEMA-DE-CONTROLE-FILMES

##PASSO-A-PASSO
Criar o arquivo package npm init

//Gerencia as requisições, rotas e URLs, entre outras funcionalidades.<br/>npm install express

// instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte<br/>npm install -D nodemon

//Rodar o projeto usando o nodemon nodemon app.js

//Testar API em INSOMNIA
//LISTAR UM FILME
GET: http://localhost:8080/filmes/0

//LISTAR TODOS OS FILMES
GET: http://localhost:8080/filmes

//ACRESCENTAR UM FILME
POST: http://localhost:8080/filmes
json:
{
    "name": "Avatar"
}

//ACRESCENTAR USUARIO
POST: http://localhost:8080/usuarios
json:
{
    "name": "usuario2"
}

//DELETAR USUARIO
DELETE: http://localhost:8080/usuarios/0
json:
{
    "name": "usuario1"
}

//LISTAR USUARIOS
GET: http://localhost:8080/usuarios