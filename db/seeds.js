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
var Schema = require('./schema.js');
var UserModel = Schema.UserModel;

var RestaurantModel = Schema.RestaurantModel;
var bestOfModel = Schema.bestOfModel


//RestaurantModel.remove({}, function (err) {
 //   console.log(err);
//});

// Restaurants and Their Dishes
UserModel.remove({}, function (err) {
    console.log(err)
})

RestaurantModel.remove({}, function (err) {
    console.log(err);
})
const Venkmans = new RestaurantModel({ name: 'Venkmans', dress :'casual', neighborhood:'Inman Park'})
const StapleHouse = new RestaurantModel({ name: 'StapleHouse', dress: 'upscale', neighborhood:'Old Fourth Ward'})
const MfSushi = new RestaurantModel({ name: 'MfSushi', dress: 'casual', neighborhood:'Inman Park'})

const bestOfVenkmans = new BestOfModel({ dishName:'Burrata', price:'$9', drink:'Beer slushie shandy',price:'$6'})
const bestOfStapleHouse = new BestOfModel({dishName:'Chicken Liver Tart',price:'$14',  drink:'Ivy League', price:'$11'})
const bestOfMfSushi = new BestOfModel({dishName:'Avocado Balls',price:'$9', drink:'MF Manhattan', price:'$10' })

//assigning best of to restaurant
const Restaurant =[Venkmans, StapleHouse, MfSushi]
const bestOf = [BestOfVenkmans, BestOfStapleHouse, BestOfMfSushi]
//existing users


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

users.forEach((user) => {
    user.save()
    .then((user) => {
        console.log(`${user.name} saved!`) 
    })
})

//disconnect 
db.close();
