const express = require('express');
const uploader = require('express-fileupload')
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(uploader({
    useTempFiles: true,
    tempFileDir: './tmp'
}))

app.use(routes);

module.exports = app;