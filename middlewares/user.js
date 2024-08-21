const { getuser } = require("../service/auth")

const checkAuthentication=(req,res,next)=>{
const token = req.cookies.token
req.user = null

if(!token) return next()

const user = getuser(token)

req.user = user
next()
}

const restrictTo=(roles)=>{
  return (req,res,next)=>{
    if(!req.user) return res.redirect('/login') 

    if(!roles.includes(req.user.role)) return res.end("unAuthorized")

    return next()

  }
}
  
module.exports = {checkAuthentication ,restrictTo}