const Payment = require('../models/payment');
const { errorMessage, succeedMessage } = require('../util/server-message');

const middlewares = {
  insert: async (req, res) => {
    const options = req.body;
    const isInserted = await Payment.insertPayment(options);

    if (!isInserted) res.status(400).json({ state: 'fail', message: errorMessage.failedInsert });
    res.status(200).json({ state: 'success', message: succeedMessage.succeedInsert });
  },

  select: async (req, res) => {
    const options = { user_no: req.body.user_no };
    const payments = await Payment.selectPaymentByUser(options);

    if (!payments) res.status(400).json({ state: 'fail', message: errorMessage.failSelect });
    res
      .status(200)
      .json({ state: 'success', message: succeedMessage.succeedSelect, data: payments });
  },
};

module.exports = middlewares;
