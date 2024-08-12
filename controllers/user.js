const User = require('../models/user')

const handleuserSignup =async(req,res)=>{
const {name,email,password} = req.body
await User.create({
    name,
    email,
    password
})
res.render('home')
}

module.exports = {handleuserSignup} 