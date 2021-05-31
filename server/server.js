import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import passport from './passport/index.js';
import routes from './routes/index.js';
import dbConnection from './db/index.js';

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
    secret: process.env.APP_SECRET || 'secret_key',
    resave: false,
    saveUninitialized: false,
  }),
);

// ===== Passport ====
app.use(passport.initialize());
app.use(passport.session()); // will call the deserializeUser

// ==== if its production environment!
if (process.env.NODE_ENV === 'production') {
  console.log('YOU ARE IN THE PRODUCTION ENV');
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
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
