const express = require('express')
const router = express.Router()
const {signupValidator , signupValidatorResults} = require('../middlewares/validator')
router.post('/signup' , signupValidator , signupValidatorResults)

module.exports = router