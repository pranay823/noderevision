const jwt = require('jsonwebtoken')
const secret = "pranay@123#"

const setuser=(user)=>{

return jwt.sign(
  {
  _id: user._id,
  email : user.email,
  role : user.role
},secret)
 
}

const getuser =(token)=>{
  if(!token) return null
  try{
    return jwt.verify(token,secret)
  }
  catch(error){
  return null
  }

}

module.exports ={setuser,getuser}