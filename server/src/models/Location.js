const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
    user: {
        type: Number
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    zone: {
        type: String
    }
});

mongoose.model("Location", LocationSchema);