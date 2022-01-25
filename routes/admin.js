const express=require('express')
const path=require('path');

const product=[];


const router=express.Router();
router.get('/add-product',(req,res,next)=>{
    console.log('In the moddleware');
    // res.sendFile(path.join(__dirname,'../','Views','add-product.html'));
    res.render('add-product',{pageTitle:'add-product'})
});

router.post('/add-product',(req,res)=>{
    product.push({title:req.body.title})
    res.redirect('/');
});

exports.routes=router;
exports.product=product;