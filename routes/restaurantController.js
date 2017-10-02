const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js');
const RestaurantModel = Schema.RestaurantModel;

// Route to Index
router.get('/', (request, response) => {


    // Find all the restaurants in my database
    RestaurantModel.find({})
        .then((Restaurants) => {

            response.render('Restaurant/index', {
                Restaurant: Restaurant
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

//New Restaurant route
router.get('/new', (request, response) => {
            response.render('Restaurants/new')
        })

//Create a route
router.post('/', (request, response) => {

    //Grab new company info as a JS object
    const newRestaurant = require.body

//CREATE/ save new restaurant using Restaurant Model
    RestaurantModel.create(newRestaurant)
        .then(() => {
    response.redirect('/Restaurants')
        })
        .catch((error) =>{
            console.log(error)
        })

 })

 // Edit Route
router.get('/RestaurantId/edit', (request, response) => {

        const RestaurantId = request.params.RestaurantId

        RestaurantModel.findById(RestaurantId)
        .then((Restaurant) => {
            response.render('Restaurants/edit', {
                Restaurant: Restaurant
            })
        })
        })
