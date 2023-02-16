const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
    pid:{
        type:String,
        required:true,  
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        trim:true
    },
    description:{
        type:[String],
        trim:true
        
    },
    image:{
        fileName:String,
        filePath:String,
        contentType:String
    },
    category:{
        type:String,
        required:true
    },
    sellerId:{
        type:String,
        required:true
    }
})

const ProductModel=mongoose.model('Product',ProductSchema);

module.exports={ProductModel};