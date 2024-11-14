import { Schema,model } from "mongoose";

const appointmentSchema=new Schema({
    name:{
        type:String,
        required: true

    },
    appointmentdate:{
        type:Date,
        required:true,
        default:Date.now,
    },
    status:{
        type:String,
        enum: ['pending', 'confirmed', 'cancelled'],
        default: 'pending',
    },
    completedAt:{
        type:Date
    },
   cancelledAt:{
        type:Date
    },
    note:{
        type:String
    },
    age:{
        type:num,
        required:true
    },
    gender:{
        type:String,
        enum:['male', 'female','others'],
        default:'male'
    },
    test:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

const Appointment=model('Appointment',appointmentSchema);
module.exports=Appointment;
