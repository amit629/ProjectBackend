const express=require('express')
const {ProductModel}=require('../models/Product')
const path=require('path')
const Router=express.Router();



Router.get('/app',async(req,res)=>{
    const data=await ProductModel.find({}).limit(8);
    let udata=req.user;
    if(udata==undefined)
    {
        udata=""
    }
    res.render('home',{partialToLoad:'fir',productData:data,userData:udata})
})
Router.get('/app/store',async (req,res)=>{

    const {_filt}=req.query;
    let data="";
    if(_filt==undefined)
    {
        data=await ProductModel.find({})
    }
    else{
        data=await ProductModel.find({category:_filt})
    }
    // const data=await ProductModel.find({}).limit(20);
    let udata=req.user;
    if(udata==undefined)
    {
        udata=""
    }
    // res.json(data)
    res.render('home',{partialToLoad:'sec',productData:data,userData:udata});
})
Router.get('/app/store/product/:id',async(req,res)=>{
    const {id}=req.params;
    let data=await ProductModel.find({pid:id});
    let morePro=await ProductModel.find({category:data[0].category,pid:{"$ne":id}}).limit(4);
    let udata=req.user;
    if(udata==undefined)
    {
        udata=""
    }
    console.log(morePro)
    res.render('home',{partialToLoad:'product',productData:data,relatedPro:morePro,userData:udata})
})
module.exports={productRouter:Router}