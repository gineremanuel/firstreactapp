const { Router } = require('express')
const controllers = require('../controllers')
const route = Router();

module.exports = app => {
  app.use('/user', route)
  route.post('/', 
  controllers.user.createUser)
}
