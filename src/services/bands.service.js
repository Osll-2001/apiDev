const Bands=require('../models/bands.model');


const BandService={

    getAll:async ()=>{
        try{
            const bands=await Bands.find();
            return bands;
        }catch(err){
            throw Error('Error',err);
        }
    },

    get:async (query)=>{
        try{
            const bands=await Bands.find(query);
            return bands;
        }catch(err){
            throw Error('Error',err);
        }
    },

    create:async (body)=>{
        try{
            const newBand=new Bands(body);
            await newBand.save();
        }catch(err){
            throw Error('Error',err);
        }
    }
}

module.exports=BandService;