//Importamos al service de bands
const BandsService=require('../services/bands.service');

const BandsController={
    get:async (req,res)=>{
        const {query}=req;

        try{

            let bands=await BandsService.get(query);
            res.status(200).json({data:bands});

        }catch(err){
            res.status(404).json({message:err.message});
        }
    },
    
    getId:async(req,res)=>{
        const {id}=req.params;
        try{
            const band=await BandsService.getId(id);
            res.status(200).json({data:band});
        }catch(err){
            throw Error('Error: ',err.message);
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
    },

    update:async(req,res)=>{
        const{id}=req.params;
        const {body}=req;

        try{
            await BandsService.update(id,body);
            res.status(200).json({message:'Modificado con exito'});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    },

    delete:async(req,res)=>{
        const {id}=req.params;

        try{
            await BandsService.delete(id);
            res.status(200).json({message:'Se elimino el registro con exito'});
        }catch(err){
            res.status(500).json({message:err.message});
        }
    }
}

module.exports=BandsController;