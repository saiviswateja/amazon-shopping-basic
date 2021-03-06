const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    console.log("came to authorise");
    const {authorization} = req.headers;
    if(!authorization){
        return res.status(400).json({
            error:"You must be logged in"
        });
    }
    const token = authorization.replace("Bearer ","");
    console.log(token);
    jwt.verify(token,"secret",(err,payload)=>{
        if(err){
            return res.status(401).json({
                error:"You must be logged in"
            });
        }
        console.log("payload is "+payload);
        const {_id} = payload;
        console.log(_id);
    })
    next();
}