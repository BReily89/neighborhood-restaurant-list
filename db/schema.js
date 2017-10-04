const mongoose = require('mongoose');

//initiate name for schema w/ mongoose

const Schema = mongoose.Schema;

const BestOfSchema = new Schema({
    dishName: {
        type: String,
        required: true
    },
    dishPrice: {
        type: Number,
        required: true
    },
    drinkName: {
        type: String,
        required: true
    },
    drinkPrice: {
        type: Number,
        required: true
    }
})

const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    attire: {
        type: String,
        required: true
    },
    
    neighborhood: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false
    },
    bestOfs: BestOfSchema
});



const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
}

})
const UserModel = mongoose.model('User', UserSchema)
const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema)
const BestOfModel = mongoose.model('bestOf', BestOfSchema)
module.exports = {
    RestaurantModel: RestaurantModel,    
    BestOfModel: BestOfModel,
    UserModel: UserModel,
    }


    