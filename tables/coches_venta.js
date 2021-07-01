const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();

router.get('/coches_venta', (req, res) => {
    let coches;
    conn.query('select c.id,c.estado,c.unidades,c.precio,m.marca,m.modelo,m.anio from coches_venta c join modelo m on c.id_modelo=m.id where estado_logico =1;', (error, results, fields) => {
        coches = results;
        res.render('pages/cruds/coches_venta/coches_venta', { registros: coches });
    });

    router.post('/coches_venta/delete', (req, res) => {
        //console.log(req.body.id);
        let query = `update coches_venta set estado_logico=0 WHERE id = ${req.body.id};`;
        //console.log(query);
        conn.query(query, (error, results, fields) => {
            res.redirect('/coches_venta');
        });
    });

    router.get('/coches_venta/create', (req, res) => {
        conn.query('select * from modelo', (error, results, fields) => {
            //console.log(results);
            res.render('pages/cruds/coches_venta/create', { modelo: results });
        });
    });

    router.post('/coches_venta/create', (req, res) => {

        conn.query(`insert into coches_venta values('',${req.body.id_modelo},'${req.body.estado}',${req.body.unidades},${req.body.unidades},1);`, (error, results, fields) => {
            //console.log(results);
            res.redirect('/coches_venta');
        });
    });
    router.get('/coches_venta/update', (req, res) => {
        conn.query('select * from modelo', (error, results, fields) => {

            conn.query(`select * from coches_venta where id=${req.query.id}`, (error, results2, fields) => {
                //console.log(results2);
                res.render('pages/cruds/coches_venta/update', { modelo: results, data: results2[0] });
            });

        });
    });
    router.post('/coches_venta/update', (req, res) => {

        conn.query(`update coches_venta set id_modelo=${req.body.id_modelo},estado='${req.body.estado}',unidades=${req.body.unidades},precio=${req.body.precio} where id =${req.body.id};`, (error, results, fields) => {

            res.redirect('/coches_venta');
        });
    });

});




module.exports = router;