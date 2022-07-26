//Importamos al service de bands
const BandsService=require('../services/bands.service');

const BandsController={
    get:async (req,res)=>{
        const {body}=req;

        try{

            let bands;
            Object.entries(body).length===0 ? bands=await BandsService.getAll() : bands=await BandsService.get(body);
            res.status(200).json({data:bands});

        }catch(err){
            res.status(404).json({message:err.message});
        }
    },
    create:async (req,res)=>{
        const {body}=req;
        try{
            await BandsService.create(body);
            res.sendStatus(201);
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}

module.exports=BandsController;