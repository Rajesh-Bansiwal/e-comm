const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function verifytoken(req,res,next){
    let token=req.headers['authorization']
// console.log("m.m",token)
if(token){
token=token.split(' ')[1]
// console.log(token)
jwt.verify(token,jwtkey,(err,valid)=>{
    if(err){
res.staus(404).send({result:"Please provide valid token"})
    }
    else{
next()
    }
})
}
else{
res.send({result:"please add tove with header"})
}
}