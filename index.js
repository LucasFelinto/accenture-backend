const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello Worl');
});

app.listen(8002);