const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const bodyParser = require('body-parser');
const userRouter = require('./routes/User');
const adminRouter = require('./routes/Admin');
const productRouter = require('./routes/Product');

const app = express();

app.use(bodyParser.json());
app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/product',productRouter);

mongoose.connect('mongodb://localhost:27017/amazon',{useNewUrlParser:true,useUnifiedTopology:true},(err,db)=>{
    if(err){
        console.log("Error connecting the db");
        return;
    }
    console.log("database connected");
});


const port = process.env.PORT || 8000 ;

app.listen(8000,()=>{
    console.log(
        "Application started at the server side"
    );
})