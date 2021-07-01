const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();


router.get('/coches', (req, res) => {
    let coches;
    conn.query('select c.id,c.matricula,c.no_motor,c.id_modelo,c.estado_logico,m.marca,m.modelo,m.anio from coches as c INNER JOIN modelo as m on c.id_modelo = m.id where estado_logico = 1  order by c.id ;', (error, results, fields) => {
        coches = results;
        console.log(results);
        res.render('pages/cruds/coches/coches', { registros: coches });
    });


});
router.post('/coches/delete', (req, res) => {

    let query = `update coches set estado_logico=0 WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/coches');
    });
});

router.get('/coches/update', (req, res) => {
    let query = 'select * from modelo;';
    let query2 = `select * from coches where id ="${req.query.id}";`;

    conn.query(query2, (error, results, fields) => {
        let coche = results;
        conn.query(query, (error, results, fields) => {
            res.render('pages/cruds/coches/update.ejs', { coche: coche[0], modelo: results });
        });

    });
    //res.render('pages/cruds/coches/update.ejs', {});
});
router.post('/coches/update', (req, res) => {

    let query = `update coches set matricula ="${req.body.matricula.trim()}",no_motor="${req.body.no_motor.trim()}",id_modelo="${req.body.id_modelo.trim()}" WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/coches');
    });
});

router.get('/coches/create', (req, res) => {
    let query = 'select * from modelo;';
    conn.query(query, (error, results, fields) => {
        res.render('pages/cruds/coches/create.ejs', { modelo: results });
    });
});

router.post('/coches/create', (req, res) => {

    let query = `insert into coches values("","${req.body.matricula}","${req.body.no_motor}","${req.body.id_modelo}",1) ;`;
    conn.query(query, (error, results, fields) => {

        res.redirect('/coches');
    });
})
module.exports = router;