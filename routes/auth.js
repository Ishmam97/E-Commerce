const express = require('express')
const router = express.Router()

const {signupValidator , signupValidatorResults} = require('../middlewares/validator')
const {signUpController} = require('../controllers/auth')
router.post('/signup' , signupValidator , signupValidatorResults , signUpController)

module.exports = router