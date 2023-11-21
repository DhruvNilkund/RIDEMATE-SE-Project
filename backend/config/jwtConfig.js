// Import necessary modules from the 'passport-jwt' library
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const passport = require('passport');

// Set up a new JWT authentication strategy using Passport
passport.use(new JWTstrategy({
    // Specify the secret key used to sign the JWT tokens
    secretOrKey: 'top_secret',

    // Extract the JWT token from the URL query parameter named 'secret_token'
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        // If the token is valid, pass the associated user to the next middleware
        return done(null, token.user);
    } catch (error) {
        // If an error occurs during token verification, pass the error to the next middleware
        done(error);
    }
}));
