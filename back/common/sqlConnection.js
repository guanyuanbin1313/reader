const mysql = require('mysql');


var connection = mysql.createConnection({
    host: '101.37.172.171',
    post: '3306',
    user: 'root',
    password: '12345',
    database: 'reader'
})

module.exports = connection;