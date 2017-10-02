const mongoose = require('mongoose');

//initiate name for schema w/ mongoose

const Schema = mongoose.Schema;


const RestaurantSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dress: {
        type: String,
    },
    
    neighborhood: {
        type: String,
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
const BestOfModel = mongoose.model('BestOf', BestOfSchema)
module.exports = {
    RestaurantModel: RestaurantModel,    
    BestOfModel: BestOfModel,
    UserModel: UserModel,
    }


    