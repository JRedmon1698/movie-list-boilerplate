const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8000;
const path = require('path');
const db = require('../db/index.js');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
  db.query('SELECT * FROM movies', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/movies', (req, res) => {
  let sql = 'INSERT INTO movies (title, director, release_date) VALUES (?, ?, ?)';
  db.query(sql, [req.body.title, req.body.director, req.body.release_date], (err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(201).send('Movie added!');
    }
  });
});

app.delete('/api/movies', (req, res) => {
  let sql = 'DELETE FROM movies WHERE title = ?';
  db.query(sql, [req.query.title], (err) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).send('Movie deleted.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

