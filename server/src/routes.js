const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ZoneController = require('./controllers/ZoneController');
const PolygonController = require('./controllers/PolygonController');
const LocationController = require('./controllers/LocationController');


//Usuario
routes.get("/user", UserController.getUsers);
routes.post("/user/login", UserController.login);
routes.post("/user", UserController.register);

//Zonas
routes.get("/zone", ZoneController.getAll);
routes.get("/zone/:name", ZoneController.getOne);
routes.post("/zone", ZoneController.register);

//Polygono das Zonas
routes.get("/polygon", PolygonController.getAll);
routes.post("/polygon", PolygonController.register);

//Location dos usuarios
routes.get("/location", LocationController.getAll);
routes.post("/location", LocationController.register);


// User.create({
    //     registration: "1",
    //     name: "admin",
    //     password: "admin4321",
    //     authentication: true
    // });

 module.exports = routes;
