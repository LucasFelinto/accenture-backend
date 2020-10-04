const  express = require('express');

const Routes = express.Router();

Routes.post('/', (req, res) => {
  console.log(req.body)
});