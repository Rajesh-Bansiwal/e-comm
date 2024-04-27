// const user=require('../db/user')
// const product=require('../db/product')
const products=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function product(req,res){
    let data=await products.find()
    if(data.length>0){
        res.send(data)
    }
    else{
        res.send({result:"No products found"})
    }
}