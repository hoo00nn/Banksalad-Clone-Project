const express = require('express');

const router = express.Router();
const { APIAuth } = require('../../middlewares/auth');
const { transactionMiddlewares } = require('../../middlewares/transaction');

router.get('/', APIAuth, transactionMiddlewares.getTransactionsByOption);
router.post('/', APIAuth, transactionMiddlewares.insert);
router.put('/', APIAuth, transactionMiddlewares.update);
router.delete('/', APIAuth, transactionMiddlewares.delete);

module.exports = router;
