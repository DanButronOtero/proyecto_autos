const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();
const crypto = require('crypto');



// if (req.session.user != undefined) {
//     //
// } else {
//     res.redirect('/login');
// }
router.get('/usuarios', (req, res) => {
    if (req.session.user != undefined) {
        connection.query('select * from usuarios;', (error, results, fields) => {
            res.render('pages/cruds/usuarios/usuarios', { registros: results });
        });
    } else {
        res.redirect('/login');
    }


});
// delete
router.post('/usuarios/delete', (req, res) => {
    connection.query(`update usuarios set estado_logico=0  where id=${req.body.id};`, (error, results, fields) => {
        res.redirect('/usuarios')
    });
});

//create
router.get('/usuarios/create', (req, res) => {
    if (req.session.user != undefined) {
        connection.query(`select * from tipos_usuarios`, (error, results, fields) => {
            res.render('pages/cruds/usuarios/create', { tipos_usuarios: results });
        });
    } else {
        res.redirect('/login');
    }


});

router.post('/usuarios/create', (req, res) => {
    console.log(req.body.passwd);
    let str = req.body.passwd;
    let password = crypto.createHash('md5').update(str).digest('hex');
    let query = `insert into usuarios values('','${req.body.usuario}','${password}',${req.body.id_tipo},1);`;
    //console.log(query);
    connection.query(query, (error, results, fields) => {
        res.redirect('/usuarios');
    });
});

//update
router.get('/usuarios/update', (req, res) => {
    if (req.session.user != undefined) {
        let query = `select * from usuarios where id = ${req.query.id};`;

        connection.query(`select * from tipos_usuarios`, (error, results, fields) => {
            connection.query(query, (error, results2, fields) => {
                console.log(results2[0]);
                res.render('pages/cruds/usuarios/update', { tipos_usuarios: results, data: results2[0] });
            });

        });
    } else {
        res.redirect('/login');
    }

});

router.post('/usuarios/update', (req, res) => {
    console.log(req.body.passwd);
    let str = req.body.passwd;
    let password = crypto.createHash('md5').update(str).digest('hex');
    let query = `update usuarios set usuario='${req.body.usuario}',psswd='${password}',id_tipo='${req.body.id_tipo}' where id=${req.body.id};`;
    console.log(query);
    connection.query(query, (error, results, fields) => {
        res.redirect('/usuarios');
    });
});

module.exports = router;