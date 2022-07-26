const Bands=require('../models/bands.model');


const BandService={
    getAll:async ()=>{
        try{
            const bands=await Bands.find();
            return bands;
        }catch(err){
            throw Error('Error',err);
        }
    }
}

module.exports=BandService;