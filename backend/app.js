import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbconnect from './database.js'
import { errorMiddleware } from './error.js'
import router from './routers.js'
import bodyParser from 'body-parser'
import mongoose from "mongoose"
dotenv.config({path:"./config/config.env"})
const app=express()
const conection=async()=>{
    await app.listen(3005)
    console.log("server started at ")
}
conection()

app.use(cors())

app.use(bodyParser.json());

const main=async()=>{
   await mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, 
});
console.log("data base connected")
};
main()
const userSchema = mongoose.Schema({
    Firstname:String,
    Lastname:String,
    Date:String,
    Time:Number,
    Email:String,
    Phone:Number
});

const model=mongoose.model('PortfolioData',userSchema);


app.get('/',(req,res)=>{
    res.send("welcome")
});
app.post('/send',async(req,res)=>{
    console.log("this is send")
    let resdata= model()
    resdata.Firstname=req.body.firstname
    resdata.Lastname=req.body.lastname
    resdata.Date=req.body.date
    resdata.Time=req.body.phone.time
    resdata.Email=req.body.Email
    resdata.Phone=req.body.phone
      const doc= await resdata.save()
      console.log("this is DB data",doc)

    console.log(req.body)
    res.send(req.body)
});

