import dotenv from 'dotenv';
dotenv.config();
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import db from '../models/index.js';

passport.serializeUser((user, done) => {
  console.log('Serialize ... called!');
  console.log(user);
  done(null, { _id: user._id });
});

passport.deserializeUser((id, done) => {
  console.log('Deserialize ... called!');
  db.User.findOne({ _id: id }, 'firstName lastName photos local.username', (err, user) => {
    console.log('======= DESERILAIZE USER CALLED ======');
    console.log(user);
    console.log('--------------');
    done(null, user);
  });
});

// ==== Load Strategies ====
// passport.use();
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    function (token, tokenSecret, profile, done) {
      console.log('===== GOOGLE PROFILE =======');
      const { id, name, photos } = profile;
      console.log(id, name, photos);
      console.log('============================');

      db.User.findOne({ googleId: id }, (err, userMatch) => {
        // handle errors here:
        if (err) {
          console.log('Error!! trying to find user with googleId');
          console.log(err);
          return done(null, false);
        }
        // if there is already someone with that googleId
        if (userMatch) {
          return done(null, userMatch);
        } else {
          // if no user in our db, create a new user with that googleId
          const googleUser = new db.User({
            googleId: id,
            firstName: name.givenName,
            lastName: name.familyName,
            photos: photos.map((photo) => photo.value),
          });
          console.log(googleUser);
          // save this user
          googleUser.save((err, user) => {
            if (err) {
              console.log('Error saving the new google user');
              console.log(err);
              return done(null, false);
            } else {
              return done(null, user);
            }
          });
        }
      });
    },
  ),
);

export default passport;
