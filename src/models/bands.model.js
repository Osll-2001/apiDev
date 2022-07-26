const mongoose=require('mongoose');

const Bands=mongoose.model('Bands',{
    name:{ type:String, required:true},
    genre:{type:String, required:true},
    startYear:{type:Number},

})

module.exports=Bands;