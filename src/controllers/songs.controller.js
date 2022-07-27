const SongsService=require('../services/songs.services');

const SongsController={
    get:async(req,res)=>{

        const {query}=req;
        try{

            let songs=await SongsService.get(query);
            res.status(200).json({data:songs});

        }catch(err){
            res.status(404).json({message:err.message});
        }
    },

    getId:async(req,res)=>{

        const {id}=req.params;

        try{
            const song=await SongsService.getId(id);
            res.status(200).json({data:song});
        }catch(err){
            res.status(404).json({message:err.message});
        }
    },

    create:async (req,res)=>{
        const {body}=req;
        try{
            await SongsService.create(body);
            res.sendStatus(201);
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }
}

module.exports=SongsController;