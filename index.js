const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./database/database');
const app = express();

port = 80;
app.set('view engine', 'ejs');
conn = connection;
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use('/', express.static('complements'));


// app.use((req, res, next) => {
//     res.status(404).render('pages/404');
// });
// app.get('/', (req, res) => {
//     conn.query('select * from coches', (error, results, fields) => {
//         res.send(results);
//     });
// });

app.get('/', (req, res) => {
    res.render('pages/index');
})
app.get('/login', (req, res) => {
    res.render('pages/login');
})
app.post('/login', (req, res) => {
    console.log(req.body);
    res.redirect('/login')
});

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});