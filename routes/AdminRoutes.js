const express=require('express')
const Router=express.Router();
let {ProductModel}=require('../models/Product')
const path=require('path')
const {upload}=require('../multer');
const {v4:uidd}=require('uuid')
const passport=require('passport');
const { isAuth } = require('../passportConf');
const fs=require('fs');





Router.get('/admin',isAuth,async(req,res)=>{
    // console.log(Math.round(Math.random() * 1E9));
    if(!req.user || req.user.role!='seller')
    {
        return res.redirect('/')        
    }
    
    res.render('adminHome',{partialToLoad:'home'})
})
Router.get('/admin/AddProducts',isAuth,async(req,res)=>{
    // console.log(Math.round(Math.random() * 1E9));
    if(!req.user || req.user.role!='seller')
    {
        return res.redirect('/')        
    }
    res.render('adminHome',{partialToLoad:'addPro'})
})
Router.post('/admin/AddProducts',isAuth,upload.single('img'),async (req,res)=>{
    if(!req.user || req.user.role!='seller')
    {
        return res.redirect('/')        
    }
    let data=req.file;
    console.log(data,req.body.desc);
    let desc=req.body.desc.split("||")
    const obj={
        pid:uidd(),
        name:req.body.proName,
        price:req.body.price,
        description:desc,
        image:{
            fileName:req.file.filename,
            filePath:req.file.path,
            contentType:req.file.mimetype
        },
        category:req.body.sel,
        sellerId:req.user.uid
    }
    const respone=await ProductModel.create(obj,(err)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("done")
        }
    })
    console.log(respone);
    res.redirect('/admin/AddProducts')
})
Router.get('/admin/MyProducts',isAuth,async(req,res)=>{
    if(!req.user || req.user.role!='seller')
    {
        return res.redirect('/')        
    }
    const userData=await ProductModel.find({sellerId:req.user.uid})
    // console.log(userData)
    res.render('adminHome',{partialToLoad:'adminPro',productData:userData})
})
Router.get('/admin/MyProducts/:id/edit',isAuth,async(req,res)=>{
    if(!req.user || req.user.role!='seller')
    {
        return res.redirect('/')        
    }
    const {id}=req.params;
    let data=await ProductModel.find({pid:id});
    res.render('adminHome',{partialToLoad:'editPro',productData:data})
})  
Router.put('/admin/MyProducts/:id/edit',isAuth,async(req,res)=>{
    if(!req.user || req.user.role!='seller')
    {
        return res.redirect('/')        
    }
    // console.log("hmm")
    const {id}=req.params;
    let {proName,price,desc}=req.body
    desc=req.body.desc.split("||")
    let data=await ProductModel.updateOne({pid:id},{name:proName,price:price,description:desc})
    res.redirect('/admin/MyProducts')
   
    
})

Router.delete('/admin/MyProducts/:id/delete',isAuth,async(req,res)=>{
    if(!req.user || req.user.role!='seller')
    {
        return res.redirect('/')        
    }
    const {id}=req.params;
    const data=await ProductModel.find({pid:id});
    const imagePath=data[0].image.filePath;
    // console.log(imagePath   )
    try{
        fs.unlinkSync(imagePath)
    }
    catch(e)
    {
        res.redirect('/admin')
    }
    const del=await ProductModel.deleteOne({pid:id});
    console.log(del.acknowledged)
    if(del.acknowledged==true)
    {
        res.redirect('/admin/myProducts')
    }   
    else{
        res.send("<h1>err <a href='/admin'>go to home</a></h1>")
    }

})
module.exports={adminRouter:Router}