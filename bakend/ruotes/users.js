const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function users(req,res){
    let data=await user.find()
    res.send(data)
}