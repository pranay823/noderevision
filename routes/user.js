const express = require('express')
const {handleuserSignup} = require('../controllers/user')

const router = express.Router()

router.post('/',handleuserSignup)

module.exports = router;