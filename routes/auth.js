const express = require('express')
const router = express.Router()

const {signinValidator ,signupValidator , 
    signinValidatorResults , ValidatorResults} = require('../middlewares/validator');

const {signUpController , signinController} = require('../controllers/auth')

router.post('/signup' , signupValidator , ValidatorResults , signUpController)
router.post('/signin' , signinValidator , ValidatorResults , signinController)

module.exports = router