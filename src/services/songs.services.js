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

    getId:async (id)=>{
        try{
            const song=await Songs.find({_id:id});
            return song;
        }catch(err){
            throw Error('Error:',err.message);
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