import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String, 
        required: true,
        unique:true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        default: 'Male',
        required:true
    }
}, {
    timestamps: true
});

const User = model('User ', userSchema);
export default User;