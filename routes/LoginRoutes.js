const express=require('express');
let {UserModel}=require('../models/User')
let {v4:uuid}=require('uuid');
const passport = require('passport');
let Router=express.Router();

Router.get('/app/login',(req,res)=>{
    if(req.user)res.redirect('/')
    res.render('home',{partialToLoad:'login',userData:""})
})
Router.get('/app/register',(req,res)=>{
    if(req.user)res.redirect('/')
    // console.log(req.user)
    const {err}=req.query;
    let errmsg="";
    if(err=="exist"){
        errmsg="exist"
    }
    res.render('home',{partialToLoad:'register',errors:errmsg,userData:""})
})

Router.post('/app/register',async(req,res)=>{
    
    let {userName,userPass,userEmail,userRole}=req.body;
    
    let user=await UserModel.findOne({email:userEmail})
    // console.log(user)
    if(user) {
        return res.status(404).redirect('/app/register?err=exist')
    }
    const obj={
        uid:uuid(),
        name:userName.toLowerCase(),
        email:userEmail.toLowerCase(),
        password:userPass,
        role:userRole
    }
    const request=await UserModel.create(obj)
    res.status(202).redirect('/app/login')

})
Router.post('/app/login',passport.authenticate("local",{failureRedirect:'/app/register'}),async(req,res)=>{
    const user=req.user;
    if(user.role=='buyer')
    {
        res.redirect('/app')
    }
    else{
        res.redirect('/admin')
    }
    
})

Router.get('/app/logout',async(req,res,next)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
})
module.exports={LoginRouter:Router}