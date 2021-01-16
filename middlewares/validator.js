const {check , validationResult} = require('express-validator')

exports.signupValidator = [
    check('uname').not().isEmpty().trim().withMessage('Username required'),
    check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('pass').isLength({min:6}).withMessage('Password must be 6 chars or more')
];

exports.signupValidatorResults = (req , res , next)=>{
    const result = validationResult(req)
    const hasErrors = !result.isEmpty()
    if(hasErrors){
        console.log('haserrors',hasErrors)
        console.log('res' ,result)
    }
    next();
}