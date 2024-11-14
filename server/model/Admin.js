
import { Schema,model } from "mongoose";

const adminSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
       type:num,
       required:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Admin=model('Admin',adminSchema);
export default Admin