const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        // required:true
    },
    imageUrl:{
        type:String
    },
    description:{
        type:String,
    }
});

module.exports = mongoose.model("Product",productSchema);