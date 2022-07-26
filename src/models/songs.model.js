const mongoose=require('mongoose');

const Songs=mongoose.model('Songs',{
    name:{ type:String, required:true},
    genre:{type:String, required:true},
    album:{type:String,required:true},
    releaseYear:{type:Number,required:true},
    length:{type:String,required:true}

})

module.exports=Songs;