const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/learning").then(
    ()=>{
        console.log("TRUE");
    }
).catch((e)=>{
    console.log(e);
})