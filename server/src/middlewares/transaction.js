const Transaction = require('../models/transaction');

const transactionMiddlewares = {
  insert: async (req, res) => {
    const options = req.body;
    const isInserted = await Transaction.insertTransaction(options);

    if (!isInserted) res.status(400).json({ state: 'fail' });
    res.status(200).json({ state: 'success' });
  },

  update: async (req, res) => {
    const options = req.body;
    const target = { user_no: options.user_no };
    const isUpdated = await Transaction.updateTransaction(options, target);

    if (!isUpdated) res.status(400).json({ state: 'fail' });
    res.status(200).json({ state: 'success' });
  },

  delete: async (req, res) => {
    const options = req.body;
    const target = { no: options.no };
    const isDeleted = await Transaction.deleteTransaction(target);

    if (!isDeleted) res.status(400).json({ state: 'fail' });
    res.status(200).json({ state: 'success' });
  },

  getTransactionsByOption: async (req, res) => {
    const options = req.body;
    const transactions = await Transaction.getTransactionsByOption(options);

    if (!transactions) res.status(400).json({ state: 'fail' });
    res.status(200).json(transactions);
  },
};

module.exports = {
  transactionMiddlewares,
};
