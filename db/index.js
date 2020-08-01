const mysql = require('mysql');

const con = mysql.connection({
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'movie_list'
});


modules.exports = {
    connection: con
}