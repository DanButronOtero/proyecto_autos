const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();


router.get('/query', (req, res) => {
    conn.query('select * from coches', (error, results, fields) => {
        res.send(results);
    });
});

module.exports = router;