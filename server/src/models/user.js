const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    matricula: {
        type: Number,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    autenticacao: {
        type: Boolean,
        required: true
    }
});

mongoose.model("User", UserSchema);