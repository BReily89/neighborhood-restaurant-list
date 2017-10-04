require('dotenv').config();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection;

db.on('error', function (err) {
    console.log(err);
});


db.once('open', function () {
    console.log('Connected to MongoDB!');
});
var Schema = require('./schema.js');

var UserModel = Schema.UserModel;
var RestaurantModel = Schema.RestaurantModel;
var BestOfModel = Schema.BestOfModel

var john = new UserModel({ user: 'John Doe', email: 'JohnDoe@email.com' })
var bestOfVenkmans = new BestOfModel({ dishName: 'Burrata', dishPrice: 9, drinkName: 'Beer slushie shandy', drinkPrice: 6 })
var bestOfStapleHouse = new BestOfModel({ dishName: 'Chicken Liver Tart', dishPrice: 14, drinkName: 'Ivy League', drinkPrice: 11 })
var bestOfMfSushi = new BestOfModel({ dishName: 'Avocado Balls', dishPrice: 9, drinkName: 'MF Manhattan', drinkPrice: 10 })


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
const Venkmans = new RestaurantModel({ name: 'Venkmans', attire: 'casual', neighborhood: 'Inman Park',image:'https://imgur.com/y47rHqh', bestOfs: bestOfVenkmans })
const StapleHouse = new RestaurantModel({ name: 'StapleHouse', attire: 'upscale', neighborhood: 'Old Fourth Ward', image:'https://imgur.com/y47rHqh', bestOfs: bestOfStapleHouse })
const MfSushi = new RestaurantModel({ name: 'MfSushi', attire: 'casual', neighborhood: 'Inman Park',image:'https://imgur.com/y47rHqh', bestOfs: bestOfMfSushi })




//assigning best of to restaurant




Venkmans.save()
    .then((Restaurant) => {
        console.log(`${Restaurant.name} saved!`)
    })
    .catch((error) => {
        console.log(error)
    })

StapleHouse.save()
    .then((Restaurant) => {
        console.log(`${Restaurant.name} saved!`)
    })
    .catch((error) => {
        console.log(error)
    })

MfSushi.save()
    .then((Restaurant) => {
        console.log(`${Restaurant.name} saved!`)
    })
    .catch((error) => {
        console.log(error)
    })
john.save()
    .then((user) => {
        console.log(`${user.name} saved!`)
    })

    .catch((error) => {
        console.log(error)
    })
//disconnect 
db.close();
