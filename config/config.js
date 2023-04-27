require('dotenv').config({path: '../../'});

exports.MONGO_URI = process.env.MONGO_URI;
exports.BACKEND_PORT = process.env.BACKEND_PORT;
exports.CLOUDINARY_NAME = process.env.CLOUDINARY_NAME;
exports.CLOUDINARY_KEY = process.env.CLOUDINARY_KEY;
exports.CLOUDINARY_SECRET = process.env.CLOUDINARY_SECRET;