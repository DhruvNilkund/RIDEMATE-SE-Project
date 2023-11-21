const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the 'users' collection
const UserSchema = new Schema({
    // User's name, required field
    name: {
        type: String,
        required: true,
    },
    // User's email, required field
    email: {
        type: String,
        required: true,
    },
    // User's password, required field
    password: {
        type: String,
        required: true,
    },
    // User's mobile number, required field
    mobile: {
        type: String,
        required: true,
    },
    // User's gender, required field
    gender: {
        type: String,
        required: true,
    },
    // User's date of birth, optional field
    dob: {
        type: Date,
        required: false,
    },
});

// Create a Mongoose model named 'user' based on the defined schema
const User = mongoose.model("user", UserSchema);

// Export the 'user' model to be used in other parts of the application
module.exports = User;
