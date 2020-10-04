const express = require('express');
const cors = require('cors');
const app = express();
const Routes = require('./src/routes');

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
  console.log(number, total);

  if(letters[number]) {

    if(total <= letters[number].length && total > 0) {
      const index = total - 1;
      return letters[number][index];
    } else if(total <= 4) {
      const tamanho = letters[number].length;
      let index = total % tamanho;
      index = index == 0 ? 0 : index - 1;
      return letters[number][index];
    } else {
      return letters[number][0];
    }

  } else {
    return 'erro';
  }


}

app.post('/', (req, res) => {
  console.log(req);
  res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());

  const {
    number,
    total
  } = req.body;
  const resultado = translateMessage(number, total);
  res.json({
    "msg": resultado
  })
});


const PORT = 8002;

app.listen(PORT, () => {
  console.log('Servidor iniciado na porta 8001');
  console.log('CTRL + C para derrubar o servidor');
})