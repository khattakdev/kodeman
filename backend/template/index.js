const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
// eslint-disable-next-line import/extensions
const routes = require('./routes/index');
require('dotenv').config();

const connectDB = require('./config/db');

const app = express();
const port = 8080;

app.use(
  cookieSession({ name: 'session', keys: ['lama'], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
connectDB(() => {
  app.listen(8080);
});

app.listen(port, console.log('Server Started!'));
