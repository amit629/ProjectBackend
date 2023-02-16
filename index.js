const express=require('express')
const path=require('path')
let {ProductModel}=require('./models/Product')
const mongoose=require('mongoose')
const {seedModal}=require('./seed')
const passport = require('passport')
const expressSession=require('express-session')
const methodoverride=require('method-override')

const {productRouter}=require('./routes/ProductRoutes')
const {adminRouter}=require('./routes/AdminRoutes')
const { LoginRouter } = require('./routes/loginRoutes')
const { init_pass } = require('./passportConf')

init_pass(passport)

// let {ProductModel}=require('./models/Product')
// const cors=require('cors')
mongoose.set('strictQuery','true')
// mongoose.connect('mongodb+srv://db:123@cluster0.9zlxjis.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb://127.0.0.1:27017/Project?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2',
        {useNewUrlParser: true, 
        useUnifiedTopology: true
        }).then(()=>{
            console.log("mongoose DB connected")
        }).catch(err=>{
            console.log("mongoose DB didnot connect");
            console.log(err);
        })



let app=express()

// seedModal()
app.use(methodoverride('_method'))
app.use(express.static(path.join(__dirname,'/uploads')))
app.use(express.static(path.join(__dirname,'/public')))

// app.use(cors)
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(expressSession({secret:"secret",resave:false,saveUninitialized:false}))
app.use(passport.initialize())
app.use(passport.session())


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')


app.use(productRouter);
app.use(adminRouter)
app.use(LoginRouter)

app.get('/',async(req,res)=>{
    
    res.redirect('/app')
    // let data=await ProductModel.find({})
    // let pathname=data[0].image.fileName
    // res.send(`<img src='${pathname}'/>`);
    

})

app.listen(3000,(err)=>{
    if(err)
    {
        console.log(err)

    }
    else{
        console.log('server running')
    }
})