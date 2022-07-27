const express=require('express');
const SongsRouter=express.Router();
const SongsController=require('../controllers/songs.controller');

SongsRouter.get('/',SongsController.get);
SongsRouter.post('/',SongsController.create);

module.exports=SongsRouter;