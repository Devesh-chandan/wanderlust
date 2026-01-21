const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const passport=require("passport");
const {saveRedirectUrl}=require("../middleware.js");
const userController=require("../controllers/user");


router.route("/signup")
.get(userController.renderSignUp)
.post(userController.signUpuser);




router.get("/logout",userController.logoutUser);


// router.route("/login")
// .get(userController.renderLogin)
// .post(userController.loginUser,
    
//     saveRedirectUrl,
    
//     passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),
//     );

router.route("/login")
.get(userController.renderLogin)
.post(
    saveRedirectUrl, // 1. Save the redirect URL first
    passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), // 2. Authenticate the user
    userController.loginUser // 3. Finally, flash the message and redirect
);


module.exports=router;
