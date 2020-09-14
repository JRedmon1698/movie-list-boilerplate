const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'movie_list'
});

connection.connect(() => console.log('Connected to mysql'));

module.exports = connection;