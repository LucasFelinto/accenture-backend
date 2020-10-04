const express = require('express');
const app = express();
const Routes = require('./src/routes');

app.use(express.json());

const letters = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i'],
  ['j', 'k', 'l'],
  ['m', 'n', 'o'],
  ['p', 'q', 'r', 's'],
  ['s', 'u', 'v'],
  ['w', 'x', 'y', 'z'],
];



const PORT = 8002;

app.listen(PORT,() => {
  console.log('Servidor iniciado na porta 8001');
  console.log('CTRL + C para derrubar o servidor');
})