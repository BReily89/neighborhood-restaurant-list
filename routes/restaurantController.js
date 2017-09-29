const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js');
const RestaurantModel = Schema.restaurantModel;

// Route to Index
router.get('/', (request, response) => {


    // Find all the restaurants in my database
    RestaurantModel.find({})
        .then((restaurants) => {

            response.render('restaurant/index', {
                restaurants: restaurants
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//New Restaurant route
router.get('/new', (request, response) => {
            response.render('restaurants/new')
        })

//Create a route
router.post('/', (request, response) => {

    //Grab new company info as a JS object
    const newREstaurant = require.body

//CREATE/ save new restaurant using Restaurant Model
    RestaurantModel.create(newRestaurant)
        .then(() => {
    response.redirect('/restaurants')
        })
        .catch((error) =>{
            console.log(error)
        })

        })