const Sequelize = require('sequelize');

const User = require('./user');
const Transaction = require('./transaction');
const Code = require('./code');
const Payment = require('./payment');

const env = process.env.NODE_ENV || 'development';
const config = require('../../config/config')[env];

const sequelize = new Sequelize({
  ...config,
  define: {
    timestamps: false,
  },
});

const db = {};

db.User = User;
db.Transaction = Transaction;
db.Code = Code;
db.Payment = Payment;

Object.keys(db).forEach((modelName) => db[modelName].initialize(sequelize));

Object.values(sequelize.models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
