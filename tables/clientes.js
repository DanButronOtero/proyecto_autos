const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();

router.get('/clientes', (req, res) => {
    if (req.session.user != undefined) {
        conn.query('select * from clientes;', (error, results, fields) => {
            res.render('pages/cruds/clientes/clientes', { registros: results });
        });
    } else {
        res.redirect('/login');
    }


});

router.get('/clientes/create', (req, res) => {
    if (req.session.user != undefined) {
        conn.query('select * from clientes;', (error, results, fields) => {
            res.render('pages/cruds/clientes/create');
        });
    } else {
        res.redirect('/login');
    }


});
router.post('/clientes/create', (req, res) => {
    console.log(req.body);
    conn.query(` insert into clientes values('','${req.body.nombre}','${req.body.apellido_pat}','${req.body.apellido_mat}','${req.body.direccion}','${req.body.telefono}',1);`, (error, results, fields) => {
        res.redirect('/clientes');
    });
});

router.get('/clientes/update', (req, res) => {
    if (req.session.user != undefined) {
        conn.query(`select * from clientes where id=${req.query.id};`, (error, results, fields) => {
            res.render('pages/cruds/clientes/update', { data: results[0] });
        });
    } else {
        res.redirect('/login');
    }


});
router.post('/clientes/update', (req, res) => {
    console.log(`update clientes set nombre=${req.body.nombre},apellido_pat=${req.body.apellido_pat},apellido_mat=${req.body.apellido_mat},direccion=${req.body.direccion},telefono=${req.body.telefono} where id=${req.body.id};`);
    conn.query(`update clientes set nombre='${req.body.nombre}',apellido_pat='${req.body.apellido_pat}',apellido_mat='${req.body.apellido_mat}',direccion='${req.body.direccion}',telefono='${req.body.telefono}' where id=${req.body.id};`, (error, results, fields) => {
        res.redirect('/clientes');
    });
});
router.post('/clientes/delete', (req, res) => {
    conn.query(`update clientes set estado_logico=0 where id=${req.body.id};`, (error, results, fields) => {
        res.redirect('/clientes');
    });
});
module.exports = router;