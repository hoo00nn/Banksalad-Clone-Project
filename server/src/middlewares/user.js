const User = require('../models/user');
const { encryptPassword } = require('../util/bcrypt');
const { errorMessage, succeedMessage } = require('../util/server-message');

const middlewares = {
  insert: async (req, res) => {
    req.body.password = encryptPassword(req.body.password);
    const options = req.body;
    const isInserted = await User.insertUser(options);

    if (!isInserted) res.status(400).json({ status: 'fail', message: errorMessage.duplicatedUser });
    res.status(200).json({ status: 'success', message: succeedMessage.registerdUser });
  },
};

module.exports = middlewares;
