require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const routes = require('./routes/routes');
const port = process.env.NODE_PORT;
const path = './views/';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path));

app.use(routes);

app.listen(port, () => {
    console.log(`-- LISTENING on ${port} --`)
});