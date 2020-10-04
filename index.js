const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello Worl');
});

const PORT = 8002;

app.listen(PORT,() => {
  console.log('Servidor iniciado na porta 8001');
  console.log('CTRL + C para derrubar o servidor');
})