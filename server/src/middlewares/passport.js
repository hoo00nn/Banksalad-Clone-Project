const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../models/user');
require('dotenv').config('../.env');

const passportConfig = { usernameField: 'username', passwordField: 'password' };

const passportAuth = async (username, password, done) => {
  try {
    const user = await User.findOne({ where: { user_id: username } });

    if (!user) {
      return done(null, false, { message: '존재하지 않는 사용자 입니다.' });
    }
    if (password === user.password) return done(null, user);

    return done(null, false, { message: '올바르지 않은 비밀번호 입니다.' });
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
    return done(null, false, { message: '유효하지 않은 토큰입니다.' });
  } catch (error) {
    return done(error);
  }
};

passport.use('local', new LocalStrategy(passportConfig, passportAuth));
passport.use('jwt', new JWTStrategy(JWTConfig, JWTVerify));

module.exports = passport;
