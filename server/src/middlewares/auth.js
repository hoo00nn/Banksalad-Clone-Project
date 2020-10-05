const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config('../.env');

const loginAuth = async (req, res, next) => {
  try {
    passport.authenticate('local', (error, user, { message } = '') => {
      if (error || !user) return res.status(400).json({ message });

      const payload = { id: user.user_id };
      const generateJWTToken = jwt.sign(payload, process.env.JWT_SECRET_KEY);

      return res.json({ JWT: generateJWTToken });
    })(req, res);
  } catch (err) {
    next(err);
  }
};

const APIAuth = async (req, res, next) => {
  try {
    passport.authenticate('jwt', { session: false }, (error, user, message) => {
      if (error || !user) return res.status(400).json({ message });
      return res.json({ result: 'success' });
    })(req, res);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAuth,
  APIAuth,
};
