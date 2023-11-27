import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from './routes/user.route.js'
import orderRoute from './routes/order.route.js'
import reviewRoute from './routes/review.route.js'
import messageRoute from './routes/message.route.js'
import gigRoute from './routes/gig.route.js'
import conversationRoute from './routes/conversation.route.js'
import authRoute from './routes/auth.route.js'


const app = express();
dotenv.config();

const connect = async() =>{
  try {
  
  await mongoose.connect(process.env.MONGO)
    console.log("1")
  console.log("connected to mongo db ")
  } catch(error){
    console.log(error)
  }
}

// middle layer 


// app.use(cors());
app.use(express.json());
app.use(cookieParser());






mongoose.set('strictQuery',true)
app.use("/backend/users",userRoute)
app.use("/backend/orders",orderRoute)
app.use("/backend/reviews",reviewRoute)
app.use("/backend/gigs",gigRoute)
app.use("/backend/conversations",conversationRoute)
app.use("/backend/messages",messageRoute)
app.use("/backend/auth",authRoute)




app.listen(8800,() => {
  connect()
  console.log("backend server  is running")
})
