const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function updateproduct(req,res){
    let result=await product.updateOne({_id:req.params.id},{$set:req.body})
    res.send(result)   
}