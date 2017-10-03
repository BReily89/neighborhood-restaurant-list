const express = require('express')
const router = express.Router({ mergeParams: true })

const Schema = require("../db/schema.js");
const bestOfModel = Schema.bestOfModel
// INDEX route
router.get('/', (request, response) => {

    bestOfModel.find({})
        .then((bestOf) => {
            response.render('bestOf/index', {
                bestOf: bestOf
            })
        })
    .catch((error) => {
        console.log(error)
    })  
})
//NEW
router.get('/new', (request, response)=> {

    const restaurantId = request.params.restaurantId

    response.render('bestOf/new', {
        restaurantId: restaurantId
        
    })
})
//CREATE 
router.post('/', (request, response) => {

    const restaurantId = request.params.restaurantId

    const newBestOf = request.body
    RestaurantModel.findbyID(restaurantId)
    .then((restaurant) => {

        restaurant.BestOf.push(newBestOf)
        return restaurant.save()
    })
    .then((restaurant) => {
        response.redirect(`restaurants/${restaurantId}/BestOf`)
    })
})
//EDIT
router.get('/bestOf/edit', (request, response) => {
    const restaurantId = request.params.restaurantId
    const bestOfId = request.params.bestOfId

    RestaurantModel.findById(restaurantId)
    .then((restaurant) =>{

        const bestOf = restaurant.bestOf.id(bestOfId)
    })

    response.render('bestOf/edit', {
        bestOf: bestOf,
        restaurantId: restaurantId
    })
.catch((error) => {
        console.log(error)
    })
})

    //UPDATE

    router.put(':bestOfId', (request, response) =>{
        const restaurantId = request.params.restaurantId
        const bestOf = request.params.bestOfId

    bestOfId.name = updatedBestof.name
    bestOf.price = updatedBestof.price
    return restaurant.save()
    .then(() => {
        response.redirect(`restaurant/${restaurantId}/bestOf/${bestOfId}`)
        })
    })
    //SHOW
    router.get('/:bestOfId', (request, response) => {
        const restaurantId = request.params.response
        const bestOfId = request.params.bestOfId
        RestaurantModel.findById(restaurantId)
        .then((company) => {
            const bestOf = restaurant.bestOf.id(bestOf)
            response.render('bestof/show', {
                bestOf:bestOf,
                restaurantId: restaurantId
            })
        })
        .catch((error) => {
            console.log(error)
        })
    })

    //DELETE

    router.get('/:bestOf/delete', (request, response) =>{
        const bestOf = request.param.restaurantId

        RestaurantyModel.findById(restaurantId)
        .then((restaurant) => {
            const bestOf = restaurant.bestOf.id(bestOfId).remove()
            return restaurant.save()
        })
        .then(() => {
            response.redirect(`/restaurants/${restaurantId}/bestOF`)
        })
    })
    module.exports = router;