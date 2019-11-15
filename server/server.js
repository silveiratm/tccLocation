const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Iniciando o DB
// Colocar URL de acesso ao Banco
var uri = "";
mongoose.connect(uri, { useNewUrlParser: true }, (error)=>{
    if(!error){
        console.log("Success");
    }else{
        console.log(error);
    }
});

requireDir('./src/models');


// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);