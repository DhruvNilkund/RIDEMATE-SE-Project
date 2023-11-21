const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the 'buses' collection
const BusSchema = new Schema({
    companyName: {
        type: String
    },
    busType: {
        type: String
    },
    busNumber: {
        type: String
    },
    startCity: {
        type: String
    },
    destination: {
        type: String
    },
    totalSeats: {
        type: String
    },
    availableSeats: {
        type: String
    },
    pricePerSeat: {
        type: String
    }
}, {
    // Specify the name of the collection in the MongoDB database
    collection: "buses"
});

// Create a Mongoose model named 'bus' based on the defined schema
const bus = mongoose.model('bus', BusSchema);

// Export the 'bus' model to be used in other parts of the application
module.exports = bus;

