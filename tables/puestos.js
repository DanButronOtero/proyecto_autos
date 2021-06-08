const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();

router.get('/puestos', (req, res) => {
    connection.query('select * from puestos;', (error, results, fields) => {
        res.render('pages/cruds/puestos/puestos', { registros: results });
    });
});
// delete from puestos where id=id;
router.post('/puestos/delete', (req, res) => {
    connection.query(`delete from puestos where id=${req.body.id};`, (error, results, fields) => {
        res.redirect('/puestos')
    });
});

router.get('/puestos/create', (req, res) => {
    res.render('pages/cruds/puestos/create');
});

router.post('/puestos/create', (req, res) => {
    let query = `insert into puestos values('','${req.body.nombre}','${req.body.descripcion}');`;
    connection.query(query, (error, results, fields) => {
        res.redirect('/puestos');
    });
});

router.get('/puestos/update', (req, res) => {
    let query = `select * from puestos where id = ${req.query.id};`;
    connection.query(query, (error, results, fields) => {
        res.render('pages/cruds/puestos/update', { puestos: results[0] });
    });
});

router.post('/puestos/update', (req, res) => {
    let query = `update puestos set nombre='${req.body.nombre}',descripcion='${req.body.descripcion}' where id=${req.body.id};`;
    connection.query(query, (error, results, fields) => {
        res.redirect('/puestos');
    });
});

module.exports = router;