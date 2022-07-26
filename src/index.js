const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=8080;

const routerApi=require('./routes/main.controller');

mongoose.connect('mongodb+srv://osll:osll2001@cluster0.79prd.mongodb.net/devf?retryWrites=true&w=majority');



app.listen(port,()=>{
    console.log("Servidor iniciado");
})

routerApi(app);
