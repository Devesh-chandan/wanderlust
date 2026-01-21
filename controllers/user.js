const User = require("../models/user");
const {saveRedirectUrl}=require("../middleware.js");
const passport=require("passport");



module.exports.renderSignUp=(req,res)=>{
res.render("users/signup.ejs");
}
module.exports.signUpuser=async(req,res)=>{
try{
    let {username,email,password}=req.body;
const newUser=new User({email,username});
const registeredUser=await User.register(newUser,password);
console.log(registeredUser);



 req.login(registeredUser,(err)=>{
        if(err){
            next(err);
        }
        
        req.flash("success","welcome to wonderlust!!");
        res.redirect("/listings");
        
    })



}catch(err){
    req.flash("error",err.message);
    res.redirect("/signup");
}
}

module.exports.renderLogin=(req,res)=>{
    res.render("users/login.ejs");
}

module.exports.loginUser= async (req,res)=>{
    req.flash("success","wlecome back to wanderlust !!")
    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);

};


module.exports.logoutUser=(req,res)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        req.flash("success","you have been successfully logged out!!");
        res.redirect("/listings");
    });
}
