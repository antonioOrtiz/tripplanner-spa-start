const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');
const app = express();

var db = require('./models').db;

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(function(req, res, next) {
  var serverError = new Error('Server not found...');
  res.sendStatus(404);

  next(serverError);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.error(err);
  res.send(err.message + ' was the issue.');
});

db
  .sync({ force: true })
  .then(function() {
    app.listen(3000, function() {
      console.log('Your grand app is running!');
    });
  })
  .catch(console.error);
