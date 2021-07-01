const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();
const crypto = require('crypto');

router.get('/', (req, res) => {
    if (req.session.user != undefined) {
        res.render('pages/index');
    } else {
        res.redirect('/login');
    }
})
router.get('/login', (req, res) => {
    if (req.session.user != undefined) {
        res.redirect('/');
    } else {
        res.render('pages/login');
    }

})
router.post('/login', (req, res) => {
    let str = req.body.password;
    let password = crypto.createHash('md5').update(str).digest('hex');
    //console.log(req.body);

    connection.query(`select * from usuarios where usuario='${req.body.usuario}' and psswd='${password}' and estado_logico =1;`, (error, results, fields) => {
        if (results.length > 0) {
            req.session.user = req.body.usuario;
            req.session.save();
        }

    });
    res.redirect('/login')
});

router.get('/logout', (req, res) => {
    req.session.user = undefined;
    req.session.save();
    res.redirect('/');
});
module.exports = router;