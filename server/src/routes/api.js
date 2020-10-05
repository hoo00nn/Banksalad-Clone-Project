const express = require('express');

const router = express.Router();

const user = require('./api/user');
const transaction = require('./api/transaction');

router.use('/user', user);
router.use('/transaction', transaction);

module.exports = router;
