const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    registration: {
        type: Number,
        required: true
    },
    name: {
        type: String
    },
    password: {
        type: String,
        required: true
        //select: false
    },
    authentication: {
        type: Boolean
    }
});

mongoose.model("User", UserSchema);