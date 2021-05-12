require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('./passport');
const routes = require('./routes');
const dbConnection = require('./db');
const app = express();
const PORT = process.env.PORT || 3001;

// ===== Middleware ====
app.use(morgan('dev'));
app.use(
  express.urlencoded({
    extended: false,
  }),
);
app.use(express.json());
app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    resave: false,
    saveUninitialized: false,
  }),
);

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  console.log('YOU ARE IN THE PRODUCTION ENV');
  app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/'));
  });
}

/* Express app ROUTING */
app.use(routes);

// ====== Error handler ====
app.use(function (err, req, res, next) {
  console.log('====== ERROR =======');
  console.error(err.stack);
  res.status(500);
});

// ==== Starting Server =====
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
