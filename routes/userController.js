var express = require('express');
var router = express.Router();
const schema =require('../db/schema.js');
const UserModel = schema.UserModel;
const methodOverride = require('method-override')

//INDEX
 router.get('/', (request, response) => {
    UserModel.find({})
    .then((users) => {
      response.render('users/index', {
      users: users
    })
  })
 })

//NEW

//CREATE

//EDIT

//UPDATE

//SHOW

//DELETE


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
