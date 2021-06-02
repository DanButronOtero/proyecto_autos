const express = require('express');
const bodyparser = require('body-parser');
const connection = require('./database/database');
const app = express();
const conn = connection;
port = 80;
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use('/', express.static('complements'));


// app.use((req, res, next) => {
//     res.status(404).render('pages/404');
// });
app.use(require('./tables/general'));
app.use(require('./tables/coches'));
app.use(require('./tables/modelos'));


app.listen(port, () => {
    console.log(`Listening at ${port}`);
});