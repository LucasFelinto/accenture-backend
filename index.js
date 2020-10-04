const express = require('express');
const app = express();

app.use(express.json());

const letters = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['s', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}

function translateMessage(number, total) {

  if (letters[number]) {
    const tamanho = letters[number].length;
    const index = total % tamanho - 1;
    console.log(index);
    return letters[number][index];

  } else {
    return;
  }

}

app.post('/', (req, res) => {
  const {
    number,
    total
  } = req.body;
  console.log(translateMessage(number, total));
  res.json({
    "msg": "oi"
  })
});

const PORT = 8002;

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta 8001');
  console.log('CTRL + C para derrubar o servidor');
})