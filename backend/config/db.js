const mongoose = require('mongoose');
const MONGO_URI = require('./config').MONGO_URI;

const options = {
    useNewUrlParser: true,
};

mongoose.connect(MONGO_URI, options).then(
    function () {
        console.log('-- DATABASE CONNECTED --');
    }
).catch(
    function(err) {
        console.log(`-- DATABASE ERROR: ${err} --`);
    }
);