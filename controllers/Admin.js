const Product = require('../models/Product');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const {db} = require('../index');
const Admin = require('../models/Admin');
const fileUpload = require('express-fileupload');
const csvtojson = require('csvtojson');

exports.postProducts = (req,res)=>{
    if(!req.files){
        return res.status(500).send({msg:"file is not found"});
    }
    const myFile = req.files.file;
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
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
    console.log("came here jhfkjh");
    Admin.find({name:req.body.name},(err,user)=>{
        if(err){
            return res.json({
                error:"Error grabbing the details contact it support",
                success:false
            })
        }
        console.log(user)
        if(user[0])
        if(user[0].password===req.body.password){
            console.log(user[0]._id);
            const token = jwt.sign({_id:user[0]._id},"secret")
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

exports.upload = (req,res)=>{
    if(!req.files){
        return res.status(500).send({msg:"file is not found"});
    }
    const myFile = req.files.file;
    var returnProducts = [];
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        const csvFilepath = `${__dirname}/public/${myFile.name}`;
        csvtojson()
        .fromFile(csvFilepath)
        .then(products=>{
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
        })
    });
}