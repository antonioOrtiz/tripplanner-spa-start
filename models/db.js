const db = new Sequelize('postgress://localhost:5432/', {
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
