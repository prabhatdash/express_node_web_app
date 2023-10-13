const mongoose=require("mongoose");

const userData=mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required: true
    },
    age:{
        type:Number,
        required:true
    }
})

const Register=new mongoose.model("user_data",userData);
module.exports=Register;