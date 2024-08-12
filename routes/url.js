
const express = require('express')
const {generateshortid, getredirected,geturldetails  }= require('../controllers/index')


const router = express.Router()

router
.post("/",generateshortid)
.get("/:shorturl",getredirected)
.get("/analytics/:shorturl",geturldetails)



module.exports = router