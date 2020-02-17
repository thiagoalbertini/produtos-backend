var express = require('express');

const server = express();

var produtos = [
    { id: 1, nome: 'Computador', preco: 1200.20},
    { id: 2, nome: 'Mouse', preco: 20.50},
    { id: 4, nome: 'Teclado', preco: 220.50},
    { id: 12, nome: 'Processador', preco: 873.90},
];

server.get('/produto', function(request, response){

    return response.json(produto);
});

server.get('/produto/:id', function(request, response){

    const id = request.param.id;

    const produto = produtos.filter(p => p.id == id);

    return response.json(produto);
});

server.listen(3000);