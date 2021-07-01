const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();
// if (req.session.user != undefined) {
//     //
// } else {
//     res.redirect('/login');
// }
router.get('/reparaciones', (req, res) => {

    if (req.session.user != undefined) {
        conn.query(` select r.id,r.fecha,r.horas,c.matricula,concat(m.nombre,' ',m.apellido_pat,' ',m.apellido_mat) as empleado,r.id_cliente from reparaciones r join coches c on r.id_coche=c.id  join empleados m on r.id_mecanico=m.id;`, (error, results, fields) => {

            res.render('pages/cruds/reparaciones/reparaciones', { registros: results });
        });
    } else {
        res.redirect('/login');
    }



});

router.get('/reparaciones/create', (req, res) => {
    if (req.session.user != undefined) {
        let coches;
        conn.query('select * from coches;', (error, results, fields) => {

            conn.query('select * from empleados where id_puesto=5;', (error, results2, fields) => {

                conn.query('select * from clientes;', (error, results3, fields) => {
                    res.render('pages/cruds/reparaciones/create', { coches: results, mecanicos: results2, clientes: results3 });
                });

            });
        });
    } else {
        res.redirect('/login');
    }




});

router.post('/reparaciones/create', (req, res) => {
    console.log(req.body);
    //STR_TO_DATE('${req.body.contratacion}', '%Y-%m-%d'),
    conn.query(`insert into reparaciones values('',STR_TO_DATE('${req.body.fecha}', '%Y-%m-%d'),${req.body.horas},${req.body.id_coche},${req.body.id_mecanico},${req.body.id_cliente},1);`, (error, results3, fields) => {
        res.redirect('/reparaciones');
    });
});

module.exports = router;