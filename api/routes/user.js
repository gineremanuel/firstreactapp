const { Router } = require('express')
const controllers = require('../controllers')
const route = Router();

module.exports = app => {
  app.use('/user', route)
  route.get('/',
    controllers.user.getAllUsers)
  route.post('/', 
    controllers.user.createUser)
}
