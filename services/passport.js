const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {


    User.findOne({ googleId: profile.id })
      .then( (existingUser) => {
        if(existingUser){
          //we have a record with this user.
          console.log("This user Exists hahaha");
        }
        else{
          new User({
            googleId: profile.id
          }).save();
        }
      })  
}));
