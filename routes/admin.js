const express=require('express');
const router=express.Router();
router.get('/login',(req,res)=>{
    res.send('hi from admin login');
})

module.exports=router