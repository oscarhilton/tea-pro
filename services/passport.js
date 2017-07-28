const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // Already have account
          console.log('Account already created');
          done(null, existingUser);
        } else {
          // Create account!
          console.log('Adding user');
          new User({
            googleId: profile.id,
            firstName: profile.name.givenName,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName,
            gender: profile.gender
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
