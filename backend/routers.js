import express from "express";
import { visitormodel } from "./dbschema.js";

const router=express.Router()
router.get("/",(req,res)=>{
    console.log("welcome")
    res.send("welcom")
   
})
router.post("/send",async(req,res,next)=>{
const{firstname,lastname,email,phone,date,time}=req.body
await visitormodel.create(
    visitormodel.firstname=firstname,
    visitormodel.lastname=lastname,
    visitormodel.email=email,
    visitormodel.phone=phone,
    visitormodel.time=time
)
console.log("data resieved from visitor")
console.log(firstname,lastname,email,phone,date,time)

})


export default router