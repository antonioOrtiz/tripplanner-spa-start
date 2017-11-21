const Sequelize = require('sequelize');
const db = new Sequelize('postgress://localhost:5432/', {
  dialect: 'postgres',
  logging: false,
});

const Activity = db.define(
  'activity',
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    age_range: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = Activity;
