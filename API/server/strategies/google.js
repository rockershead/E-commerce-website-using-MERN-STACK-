const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const {GoogleUser} = require('../models');

passport.serializeUser((user, done) => {
  console.log('Serializing User...');
  console.log(user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  console.log('Deserializing User');
  console.log(id);
  try {
    const user = await GoogleUser.findById(id);
    if (!user) throw new Error('User not found');
    console.log(user);
    done(null, user);
  } catch (err) {
    console.log(err);
    done(err, null);
  }
});

async function googleVerifyFunction(accessToken, refreshToken, profile, done) {
  const { id: googleId } = profile;
  try {
    const googleUser = await GoogleUser.findOne({ googleId });
    if (googleUser) {
      return done(null, googleUser);
    } else {
      const newUser = await GoogleUser.create({ googleId });
      return done(null, newUser);
    }
  } catch (err) {
    console.log(err);
    return done(err, null);
  }
}

passport.use(
  new GoogleStrategy(
    {
      clientID: '286110391195-k29u55fv094fm6emc2k6qojktu8c1019.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8085/google/redirect',
      scope: ['identify'],
    },
    googleVerifyFunction
  )
);

module.exports = { googleVerifyFunction };