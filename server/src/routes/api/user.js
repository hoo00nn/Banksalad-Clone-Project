const express = require('express');

const router = express.Router();
const User = require('../../middlewares/user');

router.post('/', User.insert);

module.exports = router;
