const Product = require('../models/Product');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {db} = require('../index');
const Admin = require('../models/Admin');

exports.postProducts = (req,res)=>{
    var returnProducts = [];
    products = req.body;
    products.map(productInArray=>{
        const product = new Product(productInArray);
        product.save((err,savedProduct)=>{
            if(err){
                return res.json({
                    error:"error while saving the product",
                    success:false
                });
            }
            if(savedProduct){
                console.log(savedProduct);
                console.log("It came her for pushing")
                returnProducts.push(savedProduct);
                console.log("the returned products are "+returnProducts);
            }
        })
    })
    return res.json({
        error:"",
        message:"Saved Products",
        succcess:"true"
    })
}

exports.signIn = (req,res)=>{
    console.log(req.body.name);
    console.log(db);
    // const admin = new Admin({
    //     name:"admin",
    //     password:"Second@1412",
    //     role:"ROLE_ADMIN"
    // });
    // admin.save();
    Admin.find({name:req.body.name},(err,user)=>{
        if(err){
            return res.json({
                error:"Error grabbing the details contact it support",
                success:false
            })
        }
        if(user[0])
        if(user[0].password===req.body.password){
            const token = jwt.sign({_id:user._id},"secret")
            return res.json({
                error:"",
                success:true,
                token
            })
        }
        else{
            return res.json({
                error:"password doesnot match",
                success:false
            })
        }
    })
}