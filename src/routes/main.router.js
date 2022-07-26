const express=require('express');

const BandsRouter=require('./band.router');

const routerApi=(app)=>{
    app.use('/bands',BandsRouter);
}

module.exports=routerApi;