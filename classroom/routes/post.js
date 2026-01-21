const express=require("express");
const router=express.Router();


//Index route
//for posts

router.get("/",(req,res)=>{
    res.send("Get for posts");
});

//show post

router.get("/:id",(req,res)=>{
    res.send("Get for show post id ");
});

//POST 

router.post("/",(req,res)=>{
    res.send("POST for posts");
});


//Delete post

router.delete("/:id",(req,res)=>{
    res.send("Del for posts");
});

module.exports=router;