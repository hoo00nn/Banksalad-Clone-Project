const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { errorMessage } = require('../util/server-message');
const { isComparedPassword } = require('../util/bcrypt');
const User = require('../models/user');
require('dotenv').config('../.env');

const passportConfig = { usernameField: 'username', passwordField: 'password' };

const passportAuth = async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { user_id: username } });

    if (!user) return done(null, false, { message: errorMessage.invalidUser });
    if (isComparedPassword(password, user.password)) return done(null, user);

    return done(null, false, { message: errorMessage.invalidPassword });
  } catch (err) {
    return done(err);
  }
};

const JWTConfig = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: process.env.JWT_SECRET_KEY,
};

const JWTVerify = async (payload, done) => {
  try {
    const user = await User.findOne({ where: { user_id: payload.id } });
    if (user) return done(null, user);
    return done(null, false, { message: errorMessage.invalidToken });
  } catch (error) {
    return done(error);
  }
};

passport.use('local', new LocalStrategy(passportConfig, passportAuth));
passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));

module.exports = passport;
