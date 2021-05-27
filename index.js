const express = require('express');
const connection = require('./database/database');
const app = express();
port = 80;

conn = connection;
app.get('/', (req, res) => {
    conn.query('select * from coches', (error, results, fields) => {
        res.send(results);
    });
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});