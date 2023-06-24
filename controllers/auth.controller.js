import User from '../models/user.model.js'



export const login = (req,res) => {
  res.send("everything's fine here")
}

export const register = async (req,res) => {
  try {
    
    
    const newUser = new User({
      username:"test",
      email:"test",
      password:"test",
      country:"test"
    });
    

   const user =  await newUser.save();
   
    res.status(201).send("working good")
  } catch (error) {
   res.status(500).send(error)
  }
    

}
export const logout = (req,res) => {
  res.send("everything's fine here")
}
    
    