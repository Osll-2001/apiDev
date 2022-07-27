const express=require('express');
const SongsRouter=express.Router();
const SongController=require('../controllers/songs.controller');

SongsRouter.get('/',SongController.get);
SongsRouter.get('/:id',SongController.getId);
SongsRouter.post('/',SongController.create);
SongsRouter.patch('/:id',SongController.update);
SongsRouter.put('/:id',SongController.update);
SongsRouter.delete('/:id',SongController.delete);

module.exports=SongsRouter;