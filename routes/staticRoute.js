const express = require('express')
const Url = require('../models/url')

const router = express.Router()

router.get("/",async(req,res)=>{
    const getalluser = await Url.find({})
    res.render("home",{
        allurls : getalluser,
    }
    )
})

router.get("/signup",(req,res)=>{
 res.render("signup")
})

module.exports = router