const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String
    },
    role:{
        type:String,
        required:true
    }
})

let UserModel=mongoose.model('User',UserSchema);

module.exports={UserModel};


