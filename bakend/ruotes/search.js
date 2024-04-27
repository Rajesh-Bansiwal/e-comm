const user=require('../db/user')
const product=require('../db/product')
const jwt=require("jsonwebtoken")
let jwtkey="rajesh"
module.exports =async function search(req,res){
    let result=await product.find({
        "$or":[
            {name:{$regex:req.params.key}},
            {category:{$regex:req.params.key}},
            {company:{$regex:req.params.key}},
            // {price:{$regex:req.params.key}}
        ]

    })
    res.send(result)
}