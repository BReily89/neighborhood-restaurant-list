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

// Restaurants and Their Dishes
const Venkmans = new RestaurantModel({ name: 'Venkmans', dress :'casual'})
const StapleHouse = new RestaurantModel({ name: 'StapleHouse', dress: 'upscale'})
const MfSushi = new RestaurantModel({ name: 'MfSushi', dress: 'casual'})

const BestOfVenkmans = new BestOfModel({ name:'', drink:''})
const BestOfStapleHouse = new BestOfModel({name:'', drink:'Ivy League'})
const BestOfMfSushi = new BestOfModel({name:'', drink:'' })

//assigning best of to restaurant
const restaurant =[Venkmans, StapleHouse, MfSushi]
const BestOf = [BestOfVenkmans, BestOfStapleHouse, BestOfMfSushi]

restaurants.forEach((restaurant) => {
    restaurant.BestOf = BestOf

        restuarant.save()
        .then((restaurant) => {
            console.log(`${restaurant.name} saved!`)
        })
        .catch((error) => {
            console.log(error)
        })
})


