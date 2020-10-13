const { Sequelize } = require('sequelize');
const sequelize= new Sequelize('course-offering','root','16April@##2000',
{
  dialect: 'mysql',
  host: 'localhost'
});

module.exports= sequelize;