const express = require('express');
const config = require('./config/config');
const mongoose = require('mongoose');
const routes = require('./api/routes/index');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/v2/server', routes());


mongoose.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true},  (err, send) => {
  if(err){
    throw new Error('No se pudo conectar a mongo', err)
  }
  return console.log(`Connected to server: ${config.url}`)
});

app.listen(config.port, (err,send) => {
  if(err){
    throw new Error('No corrio la DB', err)  
  }
  return console.log(`
  ################################################
  🛡️  Server listening on port: ${config.port} 🛡️ 
  ################################################
  `)
});

