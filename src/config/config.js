require('dotenv').config({path: '../../'});

const {
    MONGO_URI,
    NODE_PORT
} = process.env;

module.exports = { MONGO_URI, NODE_PORT };