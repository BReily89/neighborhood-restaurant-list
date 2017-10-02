const mongoose = require('mongoose');

//initiate name for schema w/ mongoose

const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
        food: String,//link to restaurant website
        dress: String,
        neighborhood: String,
    },
    
});

const BestOfSchema = new Schema({
    name: {
        type: String,
        type: String,
        required: true,
    },
    price: {
        type: Number,
        type: Number,
    }
})
const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema)
const BestOfModel = mongoose.model('BestOf', BestOfSchema)
module.exports = {
    RestaurantModel: RestaurantModel,    
    BestOfModel: BestOfModel,
    }


    