
const User = require('../models/user')
const {setuser} = require('../service/auth')

const handleuserSignup =async(req,res)=>{
const {name,email,password} = req.body
await User.create({
    name,
    email,
    password
})
res.redirect("/")
}

const handleuserlogin =async(req,res)=>{
    const {email,password} = req.body
   const user = await User.findOne({email,password})
   if(!user){
    return res.render("login",{
        error : "email and password not valid"
    })
   }

  const token = setuser(user)
   res.cookie("token",token)
 return  res.redirect("/")

} 
module.exports = {handleuserSignup,handleuserlogin,}