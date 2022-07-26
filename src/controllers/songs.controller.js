const SongsService=require('../services/songs.services');

const SongsController={
    get:async(req,res)=>{
        
        try{
            const songs=SongsService.getAll();
            res.status(200).json({data:songs});
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }
}

module.exports=SongsController;