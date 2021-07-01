const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();
const dateFormat = require('dateformat');

// if (req.session.user != undefined) {
//     //
// } else {
//     res.redirect('/login');
// }
router.get('/empleados', (req, res) => {
    if (req.session.user != undefined) {
        conn.query('select * from empleados;', (error, results, fields) => {
            console.log(results);
            res.render('pages/cruds/empleados/empleados', { registros: results });
        });

    } else {
        res.redirect('/login');
    }


});

router.get('/empleados/create', (req, res) => {
    if (req.session.user != undefined) {
        conn.query('select * from puestos;', (error, results, fields) => {

            res.render('pages/cruds/empleados/create.ejs', { puestos: results });
        });
    } else {
        res.redirect('/login');
    }


});

router.post('/empleados/create', (req, res) => {
    console.log(req.body);
    let query = `insert into empleados values("","${req.body.nombre}","${req.body.apellido_pat}","${req.body.apellido_mat}",STR_TO_DATE('${req.body.contratacion}', '%Y-%m-%d'),"${req.body.salario}","${req.body.id_puesto}", "${req.body.estado_logico}") ;`;
    console.log(query);
    conn.query(query, (error, results, fields) => {

        res.redirect('/empleados');
    });
});

router.post('/empleados/delete', (req, res) => {
    let query = `delete from empleados WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/empleados');
    });
});


router.get('/empleados/update', (req, res) => {
    if (req.session.user != undefined) {
        let query = `select * from empleados where id ="${req.query.id}";`;

        conn.query('select * from puestos;', (error, results, fields) => {
            conn.query(query, (error, results2, fields) => {
                var day = dateFormat(results2[0].contratacion, "yyyy-mm-dd");
                console.log(day);
                console.log('RESULTADO empleados');
                console.log(results2[0].contratacion);

                res.render('pages/cruds/empleados/update', { puestos: results, data: results2[0], day: day });
            });

        });
    } else {
        res.redirect('/login');
    }




});
router.post('/empleados/update', (req, res) => {
    console.log(req.body);
    let query = `update empleados set nombre="${req.body.nombre}",apellido_pat="${req.body.apellido_pat}",apellido_mat="${req.body.apellido_mat}",contratacion=STR_TO_DATE('${req.body.contratacion}', '%Y-%m-%d'),salario="${req.body.salario}",id_puesto="${req.body.id_puesto}", estado_logico="${req.body.estado_logico}" where id= ${req.body.id};`;
    console.log(query);
    conn.query(query, (error, results, fields) => {

        res.redirect('/empleados');
    });
});

module.exports = router;