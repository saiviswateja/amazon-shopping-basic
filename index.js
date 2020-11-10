const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/',(req,res)=>{
    return res.send("Lets rock it bro");
});

mongoose.connect('mongodb://localhost:27017/amazon',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log("Error connecting the db");
        return;
    }
    console.log("Connected to mongo db");
});



const port = process.env.PORT || 8000 ;

app.listen(8000,()=>{
    console.log(
        "Application started at the server side"
    );
})