const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    registration: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    authentication: {
        type: Boolean,
        required: true
    }
});

mongoose.model("User", UserSchema);