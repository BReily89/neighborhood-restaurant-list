const express = require('express')
const router = express.Router({ mergeParams: true })

const Schema = require("../db/schema.js");
const RestaurantyModel = Schema.RestaurantModel;
// INDEX route
router.get('/', (request, response) => {
    const restaurantId = request.params.restaurantId
//using model to find by Id
    RestaurantModel.findebyID(RestaurantId)
        .then((comapny) => {
            response.render('BestOf/index', {
                restaurant: restaurant
            })
        })
    .catch((error) => {
        console.log(error)
    })
})
//NEW
router.get('/new', (request, response)=> {

    const restaurantId = request.params.restaurantId

    response.render('BestOf/new', {
        restaurantId: restaurantId
    })
})
//CREATE 
router.post('/', (request, response) => {

    const restaurantId = request.params.restaurantId

    const newBestOf = request.body
    RestaurantModel.findebyID(restaurantId)
    .then((restaurant) => {

        restaurant.BestOf.push(newBestOf)
        return restaurant.save()
    })
    .then((restaurant) => {
        response.redirect(`restaurants/${restaurantId}/BestOf`)
    })
})