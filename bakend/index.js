const express=require("express")
const cors=require("cors")
const path=require('path')
require('./db/config')
const verifytoken=require('./ruotes/jwttoken')
const login = require("./ruotes/login")
const register=require("./ruotes/register")
const add = require("./ruotes/add")
const products = require("./ruotes/products")
const _delete = require("./ruotes/delete")
const update = require("./ruotes/update")
const updateproduct = require("./ruotes/updateproduct")
const search = require("./ruotes/search")
const users = require("./ruotes/users")
const userproducts = require("./ruotes/userproducts")
const app=express()
app.use(express.json())
app.use(cors())
app.post('/register',register)
app.post('/login',login)
app.post('/add',verifytoken,add)
app.get('/products',verifytoken,products)
app.delete('/delete/:id',_delete)
app.get('/update/:id',verifytoken,update)
app.put('/updateproduct/:id',verifytoken,updateproduct)
app.get('/search/:key',verifytoken,search)
app.get('/users',users)
app.get('/userproducts/:id',userproducts)
// ===============================================
app.listen(5000,()=>{
    console.log("start")
})
// cors issue===============
// react js api ko hit karenge tb y issue dikega jb bakend k under api ko hit krta hai tomkuch security reason se req ko block kr dete hai kyuki dono ka domain or port different hota hai 
