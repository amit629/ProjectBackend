const { UserModel } = require('./models/User')
const LocalStratergy=require('passport-local').Strategy


exports.init_pass=(passport)=>{
    passport.use(new LocalStratergy({
        usernameField:'userName',
        passwordField:'userPass'
    },async(username,password,done)=>{
        try{
            let user=await UserModel.findOne({email:username})
            if(!user){
                // console.log("a")
                return done(null,false)
            }
            if(user.password!==password){
                // console.log(b)
                return done(null,false)
            }
            return done(null,user)
        }
        catch(error){
            // console.log(err)
            return done(error,false);
        }
    }))
    passport.serializeUser((user,done)=>{
        done(null,user.id)
    })
    passport.deserializeUser(async(id,done)=>{
        try{
            const user=await UserModel.findById(id);
            done(null,user)
        }catch(e)
        {
            done(error,false)
        }
    })
}

exports.isAuth=(req,res,next)=>{
    if(req.user)return next();

    res.redirect("/app/login")
}