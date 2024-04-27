const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function add(req,res){
    const result=new product(req.body)
    const data=await result.save()
    res.send(data)
}