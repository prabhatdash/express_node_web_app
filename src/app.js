const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
require("./db/conn");
const path=require("path");
const partials_path=path.join(__dirname,"../templates/partials");
const views_path=path.join(__dirname,"../templates/views");
const hbs =require("hbs");
const register=require("./models/register");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use("/images",express.static(path.join(__dirname,"../templates/public/assets")))
app.listen(port,()=>{
    console.log(`RUNNING AT PORT: ${port}`);
})

app.set("view engine","hbs");
app.set("views",views_path);
hbs.registerPartials(partials_path);
app.get("/ppp",(req,res)=>{
    res.render("index");
})

app.post("/register", async(req,res)=>{
    try{
        const registerUser= new register({
            rollno:req.body.roll,
            name:req.body.name,
            age:req.body.age
        })
        const registered=await registerUser.save();
        console.log("DATA INSERTED !");
        res.send("DATA INSERTED !");

    }
    catch (e){
        res.status(400).send(e);
    }
})

app.get("/second",(req,res)=>{
    res.render("sample2.hbs");
})


app.get("/testing",(req,res)=>{
    res.send("HELLO WORLD I AM IN TESTING");
})
app.get("/showpath",(req,res)=>{
    res.send(views_path);
})