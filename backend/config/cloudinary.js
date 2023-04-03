const cloudinary = require('cloudinary').v2;
const conf = require('./config');
// const conf = require('../config/config');

cloudinary.config({
    cloud_name: conf.CLOUDINARY_NAME,
    api_key: conf.CLOUDINARY_KEY,
    api_secret: conf.CLOUDINARY_SECRET
});

exports.uploadFile = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'webapp-blog'
    })
} 

exports.deleteFile = async publicId => {
    return await cloudinary.uploader.destroy(publicId);
} 