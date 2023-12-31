import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const logout = (req,res) => {
  res.clearCookie("accessToken",{
    sameSite:"none",
    secure:true,
  }).status(200).send("user has been logged out successfully")
}

export const register = async (req,res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password,5)
    
    const newUser = new User({
      ...req.body,
      password:hash
    });
    await newUser.save();
    res.status(201).send("user has been created successfully")
  } catch (error) {
    res.status(500).send("something went wrong !!")
  }
 }
      
 
 export const login = async (req,res) => {
   try {
    const user = await User.findOne({ username: req.body.username })
    if(!user) return res.status(404).send("username not found")

    const isCorrect = bcrypt.compareSync(req.body.password, user.password)
    if(!isCorrect) return res.status(404).send("Wrong Password or username!")

    const token = jwt.sign({
      id: user._id,
      isSeller: user.isSeller
    },process.env.JWT_KEY)
    
    const { password,...info } = user._doc;
    res.cookie("accessToken",token,{
      httpOnly:true
    }).status(201)
      .send(info)
  } catch (error) {
   res.status(500).send("something went wrong")
  }
}


    






   
    
    
    

    
    