export const verifyToken = (req,res) => {
  const token = req.cookies.accessToken;
  if(!token) return res.status(401).send("you are not aunthenticated !!")

  jwt.verify(token,process.env.JWT_KEY, async (err,payload) => {
    if(!token) return res.status(403).send("Token isn't valid")
    req.userId = payload.id;
    req.isSeller = payload.isSeller
  })
}

    
    