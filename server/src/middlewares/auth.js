const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config('../.env');

const loginAuth = async (req, res, next) => {
  try {
    passport.authenticate('local', (error, user, { message } = '') => {
      if (error || !user) return res.status(400).json({ status: 'fail', message });

      const payload = { no: user.no, id: user.user_id };
      const generateJWTToken = jwt.sign(payload, process.env.JWT_SECRET_KEY);

      return res.json({ status: 'success', JWT: generateJWTToken });
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};

const apiAuth = async (req, res, next) => {
  try {
    passport.authenticate('jwt', { session: false }, (error, user, { message } = '') => {
      if (error || !user) res.status(400).json({ status: 'fail', message });

      req.body.user_no = user.no;
      next();
    })(req, res, next);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAuth,
  apiAuth,
};
