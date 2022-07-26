//Importamos al service de bands
const BandsService=require('../services/bands.service');

const BandsController={
    getAll:async (req,res)=>{
        try{
            const bands=BandsService.getAll();
            res.status(200).json({data:bands})
        }catch(err){
            res.status(404).json({message:err.message});
        }
    }
}

module.exports=BandsController;