const express=require('express');
const router=express.Router();
router.get('/login',(req,res)=>{
    res.render('user/login');
})

router.get('/registration',(req,res)=>{
    res.render('user/registration');
})

router.post('/registration',(req,res)=>{
    console.log(req.body)
    res.json(req.body);
})

module.exports=router;