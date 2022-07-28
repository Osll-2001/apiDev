const Songs=require('../models/songs.model');

const SongsService={
    
    get:async(query)=>{
        try{

            const songs=await Songs.find(query,{"__v":0});
            return songs;
        }catch(err){
            throw Error('Error',err);
        }
    },

    getId:async (id)=>{
        try{
            const song=await Songs.find({_id:id},{"__v":0});
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
    },

    updatePartial:async(id,body)=>{

        try{
            const song=await Songs.findOne({_id:id});
            Object.assign(song,body);
            song.save();
        }catch(err){
            throw Error('Error: ',err);
        }
    },

    updatePartial:async(id,body)=>{

        try{
            const song=await Songs.findOne({_id:id});
            Object.assign(song,body);
            song.save();
        }catch(err){
            throw Error('Error: ',err);
        }
    },

    updateComplete:async(id,body)=>{

        try{
            const song=await Songs.findOne({_id:id});
            Object.assign(song,body);
            song.save();
        }catch(err){
            throw Error('Error: ',err);
        }
    },

    delete:async(id)=>{

        try{
            const song=await Songs.findOne({_id:id});
            await song.remove();
        }catch(err){
            throw Error('Error: ',err);
        }
    }
}

module.exports=SongsService;