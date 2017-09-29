require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

db.on('error', function (err) {
    console.log(err);
});


db.once('open' ,function () {
    console.log('Connected to MongoDB!');
});
var schema = require('./schema.js');


var RestaurantSchema = schema.RestaurantSchema;
var RestaurantModel = schema.RestaurantModel;
var BestOfModel = schema.BestOfModel

//RestaurantModel.remove({}, function (err) {
 //   console.log(err);
//});

// Restaurants and Their Dishes
const Venkmans = new RestaurantModel({ name: 'Venkmans', dress :'casual'})
const StapleHouse = new RestaurantModel({ name: 'StapleHouse', dress: 'upscale'})
const MfSushi = new RestaurantModel({ name: 'MfSushi', dress: 'casual'})

const BestOfVenkmans = new BestOfModel({ name:'', drink:''})
const BestOfStapleHouse = new BestOfModel({name:'', drink:'Ivy League'})
const BestOfMfSushi = new BestOfModel({name:'', drink:'' })

//assigning best of to restaurant
const Restaurant =[Venkmans, StapleHouse, MfSushi]
const BestOf = [BestOfVenkmans, BestOfStapleHouse, BestOfMfSushi]



Restaurant.forEach((Restaurant) => {
    Restaurant.BestOf = BestOf

        Restaurant.save()
        .then((Restaurant) => {
            console.log(`${Restaurant.name} saved!`)
        })
        .catch((error) => {
            console.log(error)
        })
})

//disconnect 
db.close();
