 import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  gigId:{
    type:String,
    required:true
  },
  userId:{
    type:Number,
    required:true
  },
  star:{
    type:Number,
    required:true,
    enum: [1,2,3,45]
  },
  desc:{
    type:String,
    required:true
  }
 

},
{
  timestamps:true
}
);

export default mongoose.model("Review", ReviewSchema)
  
