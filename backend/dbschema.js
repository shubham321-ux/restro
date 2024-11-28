import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    firstname:{
        type:String,

    },
    lastname:{
        type:String,
    },
    email:{
        type:String,
       
    },phone:{
        type:Number,
       

    },
    time:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    }

})

export const visitormodel=mongoose.model("visitormodel",schema)