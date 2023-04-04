const db = require('./config/db');
const port = require('./config/config').BACKEND_PORT;
const app = require('./app');

app.listen(port, () => {
    console.log(`-- LISTENING on ${port} --`)
});