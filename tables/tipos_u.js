const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();
// if (req.session.user != undefined) {
//     //
// } else {
//     res.redirect('/login');
// }
router.get('/tipos_usuarios', (req, res) => {
    if (req.session.user != undefined) {
        conn.query('select * from tipos_usuarios;', (error, results, fields) => {

            res.render('pages/cruds/tipos_usuarios/tipos_usuarios', { registros: results });
        });
    } else {
        res.redirect('/login');
    }



});

router.get('/tipos_usuarios/create', (req, res) => {
    if (req.session.user != undefined) {
        res.render('pages/cruds/tipos_usuarios/create.ejs');
    } else {
        res.redirect('/login');
    }

});

router.post('/tipos_usuarios/create', (req, res) => {

    let query = `insert into tipos_usuarios values("","${req.body.tipo}","${req.body.descripcion}") ;`;

    conn.query(query, (error, results, fields) => {

        res.redirect('/tipos_usuarios');
    });
});

router.post('/tipos_u/delete', (req, res) => {
    let query = `delete from tipos_usuarios WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/tipos_usuarios');
    });
});


router.get('/tipos_usuarios/update', (req, res) => {
    if (req.session.user != undefined) {
        let query = `select * from tipos_usuarios where id ="${req.query.id}";`;
        conn.query(query, (error, results, fields) => {
            res.render('pages/cruds/tipos_usuarios/update.ejs', { tipos_usuarios: results[0] });
        });
    } else {
        res.redirect('/login');
    }


});
router.post('/tipos_usuarios/update', (req, res) => {
    let query = `update tipos_usuarios set tipo ="${req.body.tipo.trim()}",descripcion="${req.body.descripcion.trim()}" WHERE id = '${req.body.id}';`;

    conn.query(query, (error, results, fields) => {
        res.redirect('/tipos_usuarios');
    });
});

module.exports = router;