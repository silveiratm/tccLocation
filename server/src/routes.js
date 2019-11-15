const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');

routes.get("/user", UserController.index);

// User.create({
    //     registration: "1",
    //     name: "admin",
    //     password: "admin4321",
    //     authentication: true
    // });

 module.exports = routes;
