const express = require('express');
const mongoose = require('mongoose');

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


// Primeira rota
app.get("/", (req, res) => {
   res.send('Hello nodemon');
});

app.listen(3001);