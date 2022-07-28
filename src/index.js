const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');

const port=process.env.PORT || 8080;

const routerApi=require('./routes/main.router');

mongoose.connect('mongodb+srv://osll:osll2001@cluster0.79prd.mongodb.net/devf?retryWrites=true&w=majority');



app.listen(port,()=>{
    console.log("Servidor iniciado");
})

app.use(express.json());

// CORS
app.use(cors({
  origin: '*'
}));

app.get('/',(req,res)=>{
    res.send('Api Music V.1.');
})

routerApi(app);
