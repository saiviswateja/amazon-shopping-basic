const User = require("../models/User");
const { use } = require("../routes/User");

exports.SignUp = (req,res)=>{
    const user = new User(req.body);
    User.find({email:req.body.email},(err,userWithEmail)=>{
        if(err){
            return res.json({
                error:"error while saving the user",
                success:false
            })
        }
        if(userWithEmail.length!==0){
            return res.json({
                success:false,
                error:"Already have an account with the same mail id"
            })
        }
        else{
            user.save((err,user)=>{
                if(err){
                    console.log(err)
                    return res.json({
                        error:"error hile saving the user",
                        success:false
                    })
                }
                return res.send(user);
            })
        }
    })
}

exports.SignIn = (req,res)=>{
    return res.send(req.body);
}