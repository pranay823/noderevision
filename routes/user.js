const express = require('express')
const {handleuserSignup,handleuserlogin} = require('../controllers/user')

const router = express.Router()

router.post('/signup',handleuserSignup)

router.post('/login',handleuserlogin);

module.exports = router;