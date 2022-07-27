const Songs=require('../models/songs.model');

const SongsService={
    
    getAll:async()=>{
        try{
            const songs=await Songs.find();
            return songs;
        }catch(err){
            throw Error('Error',err);
        }
    },
    create:async(body)=>{
        try{
            const newSong=new Songs(body);
            await newSong.save();
        }catch(err){    
            throw Error('Error',err);
        }
    }
}

module.exports=SongsService;