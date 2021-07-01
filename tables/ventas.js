const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();

router.get('/ventas', async(req, res) => {
    connection.query('select * from ventas;', (error, results, fields) => {
        res.render('pages/cruds/ventas/ventas', { registros: results });
    });
});

//delete
router.post('/ventas/delete', (req, res) => {
    connection.query(`delete from ventas where id=${req.body.id}; `, (error, results, field) => {
        res.redirect('/ventas')
    });
});

//create
router.get('/ventas/create', (req, res) => {
    connection.query('select c.id,c.estado,c.unidades,c.precio,m.marca,m.modelo,m.anio from coches_venta c join modelo m on c.id_modelo=m.id;', (error, results, fields) => {
        connection.query('select * from empleados;', (error, results2, fields) => {

            connection.query('select * from clientes;', (error, results3, fields) => {
                console.log(results);
                res.render('pages/cruds/ventas/create', { coches_venta: results, empleados: results2, clientes: results3 });

            });
        });


    });

});

router.post('/ventas/create', (req, res) => {
    let query = `insert into ventas values('','${req.body.fecha}','${req.body.id_coche}','${req.body.id_vendedor}','${req.body.id_cliente}','${req.body.estado_logico}');`;
    connection.query(query, (error, results, fields) => {
        res.redirect('/ventas');
    });
});

//update
router.get('/ventas/update', (req, res) => {
    let query = `select * from ventas where id = ${req.query.id};`;
    connection.query(query, (error, results, fields) => {
        res.render('pages/cruds/ventas/update', { empleados: results[0] }, { clientes: results[0] }, { coches_venta: results[0] });
    });
});

router.post('/ventas/update', (req, res) => {
    let query = `update ventas set fecha='${req.body.fecha}',coche='${req.body.id_coche}', vendedor='${req.body.id_vendedor}', cliente='${req.body.id_cliente}' where id=${req.body.id};`;
    connection.query(query, (error, results, fields) => {
        res.redirect('/ventas');
    });
});

module.exports = router;