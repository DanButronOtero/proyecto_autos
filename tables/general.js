const connection = require('../database/database');
const conn = connection;
const { Router } = require('express');
const router = Router();


router.get('/', (req, res) => {
    res.render('pages/index');
})
router.get('/login', (req, res) => {
    res.render('pages/login');
})
router.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/login')
});
module.exports = router;