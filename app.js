const express = require('express');
const uploader = require('express-fileupload')
const app = express();
const routes = require('./routes/routes');
const cors = require('cors');
const join = require('path').join;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(uploader({
    useTempFiles: true,
    tempFileDir: './tmp'
}))

app.use(routes);

app.use(express.static(join(__dirname, 'client', 'build')));

app.get("*", (req, res) => {
    res.sendFile(join(__dirname, "client", "build", "index.html"));
});

module.exports = app;