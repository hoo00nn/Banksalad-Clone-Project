const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();

const app = express();
const apiRouter = require('./routes/api');

const { PORT } = process.env;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../client/src')));

app.use('/api', apiRouter);

app.listen(PORT);

module.exports = app;
