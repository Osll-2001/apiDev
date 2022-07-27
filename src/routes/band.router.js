const express=require('express');
const BandsRouter=express.Router();
const BandController=require('../controllers/bands.controller')


BandsRouter.get('/',BandController.get);
BandsRouter.get('/:id',BandController.getId);
BandsRouter.post('/',BandController.create);

module.exports=BandsRouter;