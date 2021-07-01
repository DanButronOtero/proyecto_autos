const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();

router.get('/reparaciones', (req, res) => {


    conn.query(` select r.id,r.fecha,r.horas,c.matricula,concat(m.nombre,' ',m.apellido_pat,' ',m.apellido_mat) as empleado,r.id_cliente from reparaciones r join coches c on r.id_coche=c.id  join empleados m on r.id_mecanico=m.id;`, (error, results, fields) => {

        res.render('pages/cruds/reparaciones/reparaciones', { registros: results });
    });


});

router.get('/reparaciones/create', (req, res) => {
    let coches;
    conn.query('select * from coche;', (error, results, fields) => {

        conn.query('select * from empleados where id_puesto=5;', (error, results2, fields) => {

            conn.query('select * from clientes;', (error, results3, fields) => {
                res.render('pages/cruds/coches/coches', { coches: results, mecanicos: results2, clientes });
            });

        });
    });


});

module.exports = router;