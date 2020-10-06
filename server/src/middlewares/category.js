const Code = require('../models/code');
const { errorMessage, succeedMessage } = require('../util/server-message');

const middlewares = {
  getCodeListByOption: async (req, res) => {
    const options = req.body.code;
    const codeList = await Code.getCodeList(options);

    if (!codeList) res.status(400).json({ status: 'fail', message: errorMessage.failSelect });
    res
      .status(200)
      .json({ status: 'success', data: codeList, message: succeedMessage.succeedSelect });
  },
};

module.exports = middlewares;
