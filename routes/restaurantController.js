const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js');
const RestaurantModel = Schema.RestaurantModel;

// Route to Index
router.get('/', (request, response) => {

   // const RestaurantId =request.params.RestaurantId


    // Find all the restaurants in my database
    RestaurantModel.find({})
        .then((Restaurants) => {

            response.render('Restaurants/index', {
                Restaurants: Restaurants
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

router.get("/:restaurantId", (request, response) => {
    const restaurantId = request.params.restaurantId

    RestaurantModel.findById(restaurantId)
        .then((restaurant) =>{
            response.render("Restaurants/show", {
                restaurant: restaurant
            })
        })
        .catch((error) => {
            console.log(err)
        })

})
//New Restaurant route
router.get('/new', (request, response) => {
            response.render('restaurants/new')
        })

//Create a route
router.post('/', (request, response) => {

    //Grab new company info as a JS object
    const newRestaurant = require.body

//CREATE/ save new restaurant using Restaurant Model
    RestaurantModel.create(newRestaurant)
        .then(() => {
    response.redirect('/restaurant')
        })
        .catch((error) =>{
            console.log(error)
        })

 })
 // Create Route
router.post('/', (req, res) => {
    const newRestaurant = req.body
    RestaurantModel.create(newRestaurant)
      .then(() => {
        res.redirect('/restaurant')
      })
      .catch((error) => {
        res.render('error')
      })
  })

 // Edit Route
router.get('/:restaurantId/edit', (request, response) => {

        const restaurantId = request.params.restaurantId

        RestaurantModel.findById(restaurantId)
        .then((restaurant) => {
            response.render('restaurant/edit', {
                restaurant: restaurant
            })
        })
        .catch((error) => {
            console.log(error)
        })
        })
        

module.exports = router;