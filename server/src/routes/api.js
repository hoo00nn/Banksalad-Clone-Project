const express = require('express');

const router = express.Router();

const login = require('./api/login');
const transaction = require('./api/transaction');
const category = require('./api/category');
const payment = require('./api/payment');
const user = require('./api/user');
const { apiAuth } = require('../middlewares/auth');

router.use('/login', login);
router.use(apiAuth);
router.use('/transaction', transaction);
router.use('/category', category);
router.use('/payment', payment);
router.use('/user', user);

module.exports = router;
