const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function userproducts(req,res){
    let data=await product.find({userId:req.params.id})
    res.send(data)
}