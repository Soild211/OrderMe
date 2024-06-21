import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        required:true,
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
    ,
    isAdmin:{
        required:true,
        type:Boolean,
        default:false
    }
},{
    timestamps:true
})
const User= mongoose.model("User",userSchema);
export default User;