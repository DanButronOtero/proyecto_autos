const express = require('express');
const bodyparser = require('body-parser');
var session = require('express-session')
const connection = require('./database/database');
const app = express();
const conn = connection;
port = 80;
app.set('view engine', 'ejs');
app.use(session({ secret: 'XASDASDA' }));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use('/', express.static('complements'));


app.use(require('./tables/general'));
app.use(require('./tables/coches'));
app.use(require('./tables/modelos'));
app.use(require('./tables/puestos'));
app.use(require('./tables/tipos_u'));
app.use(require('./tables/coches_venta'));
app.use(require('./tables/usuarios'));
app.use(require('./tables/ventas'));
app.use(require('./tables/empleados'));
app.use(require('./tables/clientes'));
app.use(require('./tables/reparaciones'));

app.listen(port, () => {
    console.log(`Listening at ${port}`);
});