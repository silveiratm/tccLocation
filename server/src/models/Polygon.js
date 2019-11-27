const mongoose = require('mongoose');

const PolygonSchema = new mongoose.Schema({
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    zone: {
        type: String
    }
});

mongoose.model("Polygon", PolygonSchema);