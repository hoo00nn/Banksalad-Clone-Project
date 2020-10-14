const Transaction = require('../models/transaction');
const { errorMessage, succeedMessage } = require('../util/server-message');

const middlewares = {
  insert: async (req, res) => {
    const options = req.body;
    const isInserted = await Transaction.insertTransaction(options);

    if (!isInserted) res.status(400).json({ state: 'fail', message: errorMessage.failedInsert });
    res.status(200).json({ state: 'success', message: succeedMessage.succeedInsert });
  },

  update: async (req, res) => {
    const options = req.body;
    const target = { user_no: options.user_no };
    const isUpdated = await Transaction.updateTransaction(options, target);

    if (!isUpdated) res.status(400).json({ state: 'fail', message: errorMessage.failedUpdate });
    res.status(200).json({ state: 'success', message: succeedMessage.succeedUpdate });
  },

  delete: async (req, res) => {
    const options = req.body;
    const target = { no: options.no };
    const isDeleted = await Transaction.deleteTransaction(target);

    if (!isDeleted) res.status(400).json({ state: 'fail', message: errorMessage.faildDelete });
    res.status(200).json({ state: 'success', message: succeedMessage.succeedDelete });
  },

  getTransactionsByOption: async (req, res) => {
    const options = req.query;
    const transactions = await Transaction.getTransactionsByOption(options);

    if (!transactions) res.status(400).json({ state: 'fail', message: errorMessage.failSelect });
    res
      .status(200)
      .json({ state: 'success', data: transactions, message: succeedMessage.succeedSelect });
  },
};

module.exports = middlewares;
