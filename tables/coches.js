const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();


router.get('/coches', (req, res) => {
    let coches;
    conn.query('select c.id,c.matricula,c.no_motor,c.id_modelo,c.estado_logico,m.marca,m.modelo,m.anio from coches as c INNER JOIN modelo as m on c.id_modelo = m.id ', (error, results, fields) => {
        coches = results;
        res.render('pages/cruds/coches', { registros: coches });
    });


});
router.post('/coches/delete', (req, res) => {
    console.log(req.body.id);
    console.log(Object.keys(req.body));
    let query = `DELETE FROM coches WHERE id = '${req.body.id}';`;
    console.log(query);
    conn.query(query, (error, results, fields) => {
        res.redirect('/coches');
    });
});

module.exports = router;