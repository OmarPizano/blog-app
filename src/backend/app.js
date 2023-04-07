const express = require('express');
const uploader = require('express-fileupload')
const app = express();
const routes = require('./routes/routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(uploader({
    useTempFiles: true,
    tempFileDir: './tmp'
}))

app.use(routes);

module.exports = app;