const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function update(req,res){
    let data=await product.findOne({_id:req.params.id})
    if(data){

        res.send(data)
    }
    else{
        res.send({result:"No record found"})
    }
}