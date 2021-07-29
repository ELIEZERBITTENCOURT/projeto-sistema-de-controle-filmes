const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Films = require('../models/Films');

const connection = new Sequelize(dbConfig);

User.init(connection);
Films.init(connection);

User.associate(connection.models);
Films.associate(connection.models);

module.exports = connection;