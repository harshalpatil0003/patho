import { Schema,model } from "mongoose";

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,

    },
    mobile:{
        required:true,
        type:num
    },
    gender:{
        type:String,
        required:true,
        enum:['Male','Female','Others'],
        default:'Male'
    }
},{
    timestamps:true
})

const User=model('User',userSchema);
export default User