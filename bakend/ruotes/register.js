const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function register(req,res){
    const data=new user({...req.body})
    let result=await data.save()
    result=result.toObject()
    // console.log(result)
    delete result.password
// res.send(result)
jwt.sign({result},jwtkey,(err,token)=>{
if(err){
    res.send({result:"something went wrong"})
}
res.send({result,auth:token})
})
}