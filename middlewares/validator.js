const {check , validationResult} = require('express-validator')

exports.signupValidator = [
    check('uname').not().isEmpty().trim().withMessage('Username required'),
    check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('pass').isLength({min:6}).withMessage('Password must be 6 chars or more backend')
];
exports.signinValidator = [
    check('email').isEmail().normalizeEmail().withMessage('Invalid email'),
    check('pass').isLength({min:6}).withMessage('Password must be 6 chars or more backend')
];

exports.ValidatorResults = (req , res , next)=>{
    // console.log("reached here")
    const result = validationResult(req)
    const hasErrors = !result.isEmpty()
    if(hasErrors){
        const errorMsg = result.array()[0].msg;
        return res.status(400).json({
            error : errorMsg,
        })
        // console.log('haserrors',hasErrors)
        // console.log('res' ,result)
    }
    next();
}