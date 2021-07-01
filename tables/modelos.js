const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();
// if (req.session.user != undefined) {
//     //
// } else {
//     res.redirect('/login');
// }
router.get('/modelos', (req, res) => {
    if (req.session.user != undefined) {
        conn.query('select * from modelo;', (error, results, fields) => {

            res.render('pages/cruds/modelos/modelos', { registros: results });
        });
    } else {
        res.redirect('/login');
    }




});

router.get('/modelos/create', (req, res) => {
    if (req.session.user != undefined) {
        res.render('pages/cruds/modelos/create.ejs');
    } else {
        res.redirect('/login');
    }

});

router.post('/modelos/create', (req, res) => {

    let query = `insert into modelo values("","${req.body.marca}","${req.body.modelo}","${req.body.anio}") ;`;

    conn.query(query, (error, results, fields) => {

        res.redirect('/modelos');
    });
});

router.post('/modelos/delete', (req, res) => {
    let query = `delete from modelo WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/modelos');
    });
});


router.get('/modelos/update', (req, res) => {
    if (req.session.user != undefined) {
        let query = `select * from modelo where id ="${req.query.id}";`;
        conn.query(query, (error, results, fields) => {
            res.render('pages/cruds/modelos/update.ejs', { modelo: results[0] });
        });
    } else {
        res.redirect('/login');
    }


});
router.post('/modelos/update', (req, res) => {
    let query = `update modelo set marca ="${req.body.marca.trim()}",modelo="${req.body.modelo.trim()}",anio="${req.body.anio.trim()}" WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/modelos');
    });
});

module.exports = router;