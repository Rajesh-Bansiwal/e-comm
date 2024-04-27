const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function delet(req,res){
    let data=await product.deleteOne({_id:req.params.id})
    res.send(data)
}