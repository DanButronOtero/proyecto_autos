const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();

router.get('/puestos', (req, res) => {

    conn.query('select * from puestos;', (error, results, fields) => {

        res.render('pages/cruds/puestos/puestos', { registros: results });
    });


});

router.get('/puestos/create', (req, res) => {
    res.render('pages/cruds/puestos/create.ejs');
});

router.post('/puestos/create', (req, res) => {

    let query = `insert into puestos values("","${req.body.nombre}","${req.body.descripcion}") ;`;

    conn.query(query, (error, results, fields) => {

        res.redirect('/puestos');
    });
});

router.post('/puestos/delete', (req, res) => {
    let query = `delete from puestos WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/puestos');
    });
});


router.get('/puestos/update', (req, res) => {
    let query = `select * from puestos where id ="${req.query.id}";`;
    conn.query(query, (error, results, fields) => {
        res.render('pages/cruds/puestos/update.ejs', { puestos: results[0] });
    });

});
router.post('/puestos/update', (req, res) => {
    let query = `update puestos set nombre ="${req.body.nombre.trim()}",descripcion="${req.body.descripcion.trim()}" WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/puestos');
    });
});

module.exports = router;