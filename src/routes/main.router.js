const express=require('express');

const BandsRouter=require('./band.router');
const SongsRouter=require('./song.router');

const routerApi=(app)=>{
    app.use('/bands',BandsRouter);
    app.use('/songs',SongsRouter);
}

module.exports=routerApi;