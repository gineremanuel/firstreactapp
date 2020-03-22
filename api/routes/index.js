const { Router } = require('express')
const user = require('./user');


module.exports = () => {
  const app = Router();
  user(app);
  return app;
}    