const Bands=require('../models/bands.model');


const BandService={
    get:async (query)=>{
        try{
            const bands=await Bands.find(query);
            return bands;
        }catch(err){
            throw Error('Error',err);
        }
    },

    getId:async(id)=>{
        try{
            const band=await Bands.find({_id:id});
            return band;
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
    },

    update:async(id,body)=>{

        try{
            const band=await Bands.findOne({_id:id});
            Object.assign(band,body);
            band.save();
        }catch(err){
            throw Error('Error: ',err);
        }
    },

    delete:async(id)=>{

        try{
            const band=await Bands.findOne({_id:id});
            await band.remove();
        }catch(err){
            throw Error('Error: ',err);
        }
    }
}

module.exports=BandService;