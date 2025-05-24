const express=require('express')
const login=require('../Controller/Common/Log_in')
const router=express.Router()
router.get('/',login)
module.exports=router