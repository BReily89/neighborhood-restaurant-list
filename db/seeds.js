require('dotenv').config();

var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

db.on(error, function (err) {
    console.log(err);
});

var Schema = require('./Schema.js');

db.once('open' ,function () {
    console.log('Connected to MongoDB!');
});
//Pulls models from schema
var Schema = require('.schema.js');

var RestaurantModel = Schema.RestaurantModel;
var BestOf = Schema.BestOfModel

RestaurantModel.remove({}, function (err) {
    console.log(err);
});