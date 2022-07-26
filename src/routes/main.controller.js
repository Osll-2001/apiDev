const express=require('express');

const BandsRouter=require('./bands/index');

const routerApi=(app)=>{
    app.use('/bands',BandsRouter);
}

module.exports=routerApi;