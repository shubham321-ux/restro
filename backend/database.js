import mongoose from "mongoose"

const dbconnect=async()=>{
   await mongoose.connect(process.env.MONGO_URI)
   console.log("DB connect")
}


export default dbconnect