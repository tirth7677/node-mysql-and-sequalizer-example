// models/index.js
const Sequelize = require('sequelize');
const dbConfig = require('../config/dbconfig.js');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require('./product.model.js')(sequelize, Sequelize.DataTypes);
db.reviews = require('./review.model.js')(sequelize, Sequelize.DataTypes);

// Apply associations
require('./association.js')(db);

module.exports = db;