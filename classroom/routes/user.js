const express=require("express");
const router=express.Router();

//Index route

router.get("/",(req,res)=>{
    res.send("Get for users");
});

//show route

router.get("/:id",(req,res)=>{
    res.send("Get for show users id ");
});

//POST route

router.post("/",(req,res)=>{
    res.send("POST for users");
});


//Delete route

router.delete("/:id",(req,res)=>{
    res.send("Del for users");
});

module.exports=router;


