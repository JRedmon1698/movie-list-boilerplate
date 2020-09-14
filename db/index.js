const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'movie_list'
});

connection.connect(() => console.log('Connected to mysql'));

module.exports = connection;