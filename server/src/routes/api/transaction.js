const express = require('express');

const router = express.Router();
const transaction = require('../../middlewares/transaction');

router.get('/', transaction.getTransactionsByOption);
router.post('/', transaction.insert);
router.put('/', transaction.update);
router.delete('/', transaction.delete);

module.exports = router;
