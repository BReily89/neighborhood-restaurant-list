const express = require('express')
const router = express.Router()

// Route to Index
router.get('/' , ( request, response) => {
   
   
    // Find all the restaurants in my data base
        RestaurantModel.fin({})
        .then((restaurants) =>)

        response.render('restaurant/index', {
            restaurants: restaurants
        })
})
.catch((error =>)=> {
    console.log(error)
})