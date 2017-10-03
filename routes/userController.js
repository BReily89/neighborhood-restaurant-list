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
router.get('/new', (request, response) => {
  const userId = request.params.userId

  response.render('users/new', {
    userId: userId
  })
})

//CREATE
router.post('/', (request, response) => {

  const userId = request.params.userId

  const newUser = request.body

  UserModel.create(newUser)
  .then(() => {
    response.redirect('/restaurants') 
  })
  .catch((error) => {
    console.log(butt)
  })
})

//EDIT
router.get('/:userId/edit',(request, response) => {
  const userId = request.params.userId

  Userodel.findById(userId)
  .then((user) => {
    response.render('user/index', {
      user: user
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

//UPDATE
router.put('/:userId', (request, response) => {
  const userId = request.params.userId
  
  UserModel.findByIdAndUpdate(userId , updatedUser, {new : true})
  .then(() => {
    response.redirect(`/users/${userId}`)
  })
  .catch((error) => {
    console.log(error)
  })
})

//SHOW
router.get('/:userId' , (request, response) => {
  const userId =  request.params.userId

  UserModel.findById(userId)
  .then((user) => {
    response.render('user/show', {

    })
    .catch((error)=> {
      console.log(error)
    })
  })
})

//DELETE
router.get('/:userId/delete', (request, response) => {
  const userId = request.params.userId

  UserModel.findByIdAndRemove(userId)
  .then(() => {
    response.redirect('/users')
  })
  .catch((error) => {
    console.log(error)
  })
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
