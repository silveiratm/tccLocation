const mongoose = require('mongoose');

const ZoneSchema = new mongoose.Schema({
    name: {
        type: String
    },
    status: {
        type: Boolean
    }
});

mongoose.model("Zone", ZoneSchema);