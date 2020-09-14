const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8000 || process.env.PORT;
const path = require('path');
const db = require('../db/index.js');
// const db = require('../schema.sql');


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World');
})

// axios.get('./')
//   .then(db.query)
//   .catch()

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

