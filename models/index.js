const Sequelize = require('sequelize');
const db = require('./db');
const Place = require('./Place');
const Hotel = require('./Hotel');
const Activity = require('./Activity');
const Restaurant = require('./Restaurant');

//Associations
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
