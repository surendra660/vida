const mongoose = require('mongoose');


const userSchema=mongoose.Schema({
  name:{
    required:true,
    type:String,
    trim:true,
   }, 
  
   email:{
    required:true,
    type:String,
    trim:true,
    validate:{
        validator:(value)=>{
            const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
             return value.match(re);
        },
        message:'Enter valid email address',
    }
   }, 
   phone:{
    required:true,
    type:String,
    //trim:true,
    validate:{
        validator:(value)=>{
            const rex=/^([+|\d])+([\s|\d])+([\d])$/;
            return value.match(rex);
        },
        message:'Enter valid phone number',
    }
   },
  password:{
    required:true,
    
    type:String,
    trim:true,
    validate:{
        validator:(value)=>{
         return value.length > 6;   
        },
        message:'Enter valid password',
    }
   },
   
   address:{
    required:true,
    default:'',
    type:String,
    trim:true,
   },
   type:{
    type:String,
    default:'user',
   }

});
const User=mongoose.model("User",userSchema);
module.exports=User;
