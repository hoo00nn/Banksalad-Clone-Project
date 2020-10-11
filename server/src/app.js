const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('./middlewares/passport');
require('dotenv').config();

const app = express();
const { sequelize } = require('./models/index');

const { PORT } = process.env;
const apiRouter = require('./routes/api');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client/src')));
app.use(passport.initialize());
app.use(cors({ origin: process.env.ORIGIN, credentials: true }));
app.use('/api', apiRouter);

sequelize
  .sync({ force: false })
  .then(() => app.listen(PORT))
  .catch((err) => console.log(err));

module.exports = app;
