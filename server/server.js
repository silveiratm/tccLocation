const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());
//app.use(express.urlencoded({ extended: false }));

// Iniciando o DB
// Colocar URL de acesso ao Banco
var url = "";
mongoose.connect(url, { useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log("Banco está conectado!");
    }else{
        console.log(error);
    }
});

requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);