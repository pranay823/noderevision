const express = require('express')
const Url = require('../models/url')
const {restrictTo} = require('../middlewares/user')
const router = express.Router()


router.get("/allurls/",restrictTo("ADMIN"),async(req,res)=>{
    if(!req.user) return res.redirect('/login')
    const getalluser = await Url.find({})
    res.render("home",{
        allurls : getalluser,
    }
    )
})

router.get("/",restrictTo(['NORMAL','ADMIN']),async(req,res)=>{
    if(!req.user) return res.redirect('/login')
    const getalluser = await Url.find({createdBy : req.user?._id})
    res.render("home",{
        allurls : getalluser,
    }
    )
})

router.get("/signup",(req,res)=>{
 res.render("signup")
})

router.get("/login",(req,res)=>{
    res.render("login")
   })
   
module.exports = router