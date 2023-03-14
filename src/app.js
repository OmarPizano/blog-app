require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./config/db');
const routes = require('./routes/routes');
const port = process.env.NODE_PORT;

app.use(routes);

app.listen(port, () => {
    console.log(`-- LISTENING on ${port} --`)
});