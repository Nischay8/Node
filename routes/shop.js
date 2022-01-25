const express=require('express');
const path=require('path');
const adminData=require('./admin');
const router=express.Router();

router.get('/',(req,res,next)=>{
    console.log('In the moddleware');
    console.log('shop.js',adminData.product)
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.render('shop');
});

module.exports=router;
