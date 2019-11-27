const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const ZoneController = require('./controllers/ZoneController');
const PolygonController = require('./controllers/PolygonController');


//Usuario
routes.get("/user", UserController.index);
routes.post("/user/login", UserController.login);
routes.post("/user", UserController.register);

//Zonas
routes.get("/zone", ZoneController.getAll);
routes.get("/zone/:name", ZoneController.getOne);
routes.post("/zone", ZoneController.register);

//Polygono das Zonas
routes.post("/polygon", PolygonController.register);


// User.create({
    //     registration: "1",
    //     name: "admin",
    //     password: "admin4321",
    //     authentication: true
    // });

 module.exports = routes;
