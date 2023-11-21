const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const User = require("../models/User");

// Define a "login" strategy for Passport
passport.use(
    "login",
    new localStrategy({
        // Specify the fields used for username and password in the login form
        usernameField: "email",
        passwordField: "password",
    },
    // Callback function called during the login process
    async(email, password, done) => {
        try {
            // Find a user with the provided email in the database
            const user = await User.findOne({ email });

            // If no user is found, return an error message
            if (!user) {
                return done(null, false, { message: "User not found" });
            }

            // Validate the user's password
            const validate = await user.isValidPassword(password);

            // If the password is invalid, return an error message
            if (!validate) {
                return done(null, false, { message: "Wrong Password" });
            }

            // If both email and password are valid, return the user and a success message
            return done(null, user, { message: "Logged in Successfully" });
        } catch (error) {
            // If an error occurs during the login process, return the error
            return done(error);
        }
    })
);
