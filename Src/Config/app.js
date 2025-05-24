const express=require('express')
const login=require('../Routes/Login.js')
const app=express()
app.use('/login',login)
module.exports=app 