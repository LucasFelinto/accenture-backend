const express = require('express');
const app = express();

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

app.post('/', (req, res) => {
  console.log(req.body)
});

app.listen(8002);