const Product = require("../models/Product");


exports.getAllProducts = (req,res)=>{
    Product.find({},(err,products)=>{
        if(err){
            return res.json({
                error:"error while grabbing the products",
                success:false
            });
        }
        return res.json({
            success:true,
            error:"",
            products
        });
    });
}
