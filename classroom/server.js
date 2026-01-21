const express=require("express");
const app=express();
const users=require("./routes/user.js");
const posts=require("./routes/post.js");
const  session = require("express-session");
const flash=require("connect-flash");
const path=require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


// app.get("/getcookies",(req,res)=>{
//     res.cookie("greeet","hello their");
//     res.cookie("origin","india");
//     res.send("we sent you a cookie");
// })


// app.get("/users",(req,res)=>{
//     res.send("hi their");
// });


// app.use("/",users);
// app.use("/",posts);
const sessionOptions=({
  secret: 'secretcode',
  resave:false,
  saveUninitialized:true
 
});

app.use(
    session(sessionOptions)
);

app.use(flash()); 


app.use((req,res,next)=>{
    res.locals.messages=req.flash("success");
    res.locals.errors=req.flash("error");

    next();
})

app.get("/register",(req,res)=>{
    let {name="unknown"
    }=req.query;
    req.session.name=name;
    console.log(req.session.name);
    
    if(name=="unknown"){
 req.flash("error","Error occured");
    }else{
req.flash("success","redirecting to hello route");
    }
   
    res.redirect("/hello");
})


app.get("/hello",(req,res)=>{
    
    res.render("page.ejs",{name: req.session.name});
})

app.get("/requestcount",(req,res)=>{
    
    if(req.session.count){
        req.session.count++;
    }else{
req.session.count=1;
    }
    res.send(`you sent request ${req.session.count} times`);
})

// app.get("/test",(req,res)=>{
//     res.send("test success");
// }) 


app.listen(3000,()=>{
    console.log("server listing to 3000");
})