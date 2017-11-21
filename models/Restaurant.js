const Sequelize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/', {
  dialect: 'postgres',
  logging: false,
});

const Restaurant = db.define(
  'restaurant',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cuisine: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.FLOAT(1, 5),
      allowNull: false,
    },
  },
  {}
);

module.exports = Restaurant;
