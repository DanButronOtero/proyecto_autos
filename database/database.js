var mysql = require('mysql');
const constants = require('./constants');
const connection = mysql.createConnection({
    host: constants.host,
    user: constants.user,
    password: constants.password,
    database: constants.database
});
connection.connect(function(err) {
    if (err) throw err;
});


module.exports = connection;