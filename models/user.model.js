 import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true
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
  image:{
    type:String,
    required:false,
  },
  country:{
    type:String,
    required:true,
  },
  phonenumber:{
    type:String,
    required:false,
  },
  desc:{
    type:String,
    required:false,
  },
  isSeller:{
    type:Boolean,
    deafault:false
  },
},
{
  timestamps:true
}
);



export default  mongoose.model("User", userSchema);
  
