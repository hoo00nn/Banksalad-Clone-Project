const express = require('express');

const router = express.Router();
const { apiAuth } = require('../../middlewares/auth');
const transaction = require('../../middlewares/transaction');

router.get('/', apiAuth, transaction.getTransactionsByOption);
router.post('/', apiAuth, transaction.insert);
router.put('/', apiAuth, transaction.update);
router.delete('/', apiAuth, transaction.delete);

module.exports = router;
