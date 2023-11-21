// Importing necessary modules for building a web application using Express.js
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
const cors = require('cors')

// Creating an Express application instance
var app = express();

// Setting up authentication for login and registration
require('./auth/auth');
const login = require('./routes/login')
const loggedInPage = require('./routes/loggedInUser');

// Importing route for handling booking functionality
const bookingRoute = require('./routes/routeSelection')

// Importing router for user registration
var registerRouter = require('./routes/register');

// Database configuration, including connection to MongoDB
const DB_URL = require('./config/keys').MongoURI;

// Connecting to MongoDB database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch(err => {
        throw err
    })

// Setting up middleware for handling HTTP request/response and enabling cross-origin resource sharing
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

// Configuring routes for different parts of the application
app.use('/', login); // Handling login requests
app.use('/booking', bookingRoute); // Handling booking-related requests
app.use('/register', registerRouter); // Handling user registration requests
app.use('/user', passport.authenticate('jwt', { session: false }), loggedInPage); // Securing routes for authenticated users

// Exporting the configured Express application for use in other modules
module.exports = app;
