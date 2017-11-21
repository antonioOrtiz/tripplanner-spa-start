const Sequelize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/', {
  dialect: 'postgres',
  logging: false,
});

const Hotel = db.define(
  'hotel',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    num_stars: {
      type: Sequelize.FLOAT(1, 5),
      allowNull: false,
    },
    amenities: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = Hotel;
