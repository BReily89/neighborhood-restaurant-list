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
var BestOfModel = Schema.BestOfModel

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
const JohnDoe = new UserModel({name:'JohnDoe', email:'@email'})
const Venkmans = new RestaurantModel({ name: 'Venkmans', dress :'casual', neighborhood:''})
const StapleHouse = new RestaurantModel({ name: 'StapleHouse', dress: 'upscale', neighborhood:''})
const MfSushi = new RestaurantModel({ name: 'MfSushi', dress: 'casual', neighborhood:''})

const BestOfVenkmans = new BestOfModel({ dishName:'Burrata', price:'', drink:'Beer slushie shandy',price:''})
const BestOfStapleHouse = new BestOfModel({dishName:'Chicken Liver Tart',price:'',  drink:'Ivy League', price:''})
const BestOfMfSushi = new BestOfModel({dishName:'Avocado Balls',price:'', drink:'MF Manhattan', price:'' })

//assigning best of to restaurant
const Restaurant =[Venkmans, StapleHouse, MfSushi]
const BestOf = [BestOfVenkmans, BestOfStapleHouse, BestOfMfSushi]
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
