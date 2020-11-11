const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bodyParser = require('body-parser');
const userRouter = require('./routes/User');

const app = express();

app.use(bodyParser.json());
app.use('/user',userRouter);

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