const mongoose = require('mongoose');

//initiate name for schema w/ mongoose

const Schema = mongoose.Schema;

const RestaurtantSchema = new Schema({
    name: {
        type: String,
        required: true,
        food: String,//link to restaurant website
        dress: String,
    },
    price: {
        type: Number,
        required: true
    }
})

module.exports = {
    