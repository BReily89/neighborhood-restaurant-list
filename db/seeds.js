require('dotenv').config();

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

db.on(error, function (err) {
    console.log(err);
});

var Schema = require('./Schema.js');