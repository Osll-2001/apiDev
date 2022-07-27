const Songs=require('../models/songs.model');

const SongsService={
    
    get:async(query)=>{
        try{

            const songs=await Songs.find(query);
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