const express=require('express');
const BandsRouter=express.Router();
const BandController=require('../controllers/bands.controller')


BandsRouter.get('/',BandController.get);
BandsRouter.get('/:id',BandController.getId);
BandsRouter.post('/',BandController.create);
BandsRouter.patch('/:id',BandController.updatePartial);
BandsRouter.put('/:id',BandController.updateComplete);
BandsRouter.delete('/:id',BandController.delete);

module.exports=BandsRouter;