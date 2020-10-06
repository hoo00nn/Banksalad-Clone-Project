const express = require('express');

const router = express.Router();

const login = require('./api/login');
const transaction = require('./api/transaction');
const category = require('./api/category');
const { apiAuth } = require('../middlewares/auth');

router.use(apiAuth);

router.use('/login', login);
router.use('/transaction', transaction);
router.use('/category', category);

module.exports = router;
