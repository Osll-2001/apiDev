const SongsService=require('../services/songs.services');

const SongsController={
    get:async(req,res)=>{
        
        try{
            const songs=await SongsService.getAll();
            res.status(200).json({data:songs});
        }catch(err){
            res.status(404).json({message:err.message});
        }
    },
    create:async (req,res)=>{
        const {body}=req;
        try{
            await SongsService.create(body);
            res.sendStatus(204);
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }
}

module.exports=SongsController;