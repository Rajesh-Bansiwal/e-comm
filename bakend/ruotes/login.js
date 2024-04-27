const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function login(req,res){
    if(req.body.password && req.body.email){

        let result=await user.findOne(req.body).select("-password")
        if(result){
    jwt.sign({result},jwtkey,(err,token)=>{
        if(err){
            res.send({result:"No user found"})
        }
res.send({result,auth:token})
    })
        
        }
        else{
            res.send("No user found")
        }
    }
}