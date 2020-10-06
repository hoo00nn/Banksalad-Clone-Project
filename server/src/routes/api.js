const express = require('express');

const router = express.Router();

const user = require('./api/user');
const transaction = require('./api/transaction');
const { apiAuth } = require('../middlewares/auth');

router.use(apiAuth);

router.use('/user', user);
router.use('/transaction', transaction);

module.exports = router;
