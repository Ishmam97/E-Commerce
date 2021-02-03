const express = require('express')
const router = express.Router()
//load controller and token authenticator
const categoryController = require('../controllers/category');
const { authenticateJWT } = require('../middlewares/authenticator');

//after validating token try to make request to database
router.post('/' ,authenticateJWT, categoryController.create)
router.get('/' ,authenticateJWT, categoryController.readAll)

module.exports = router;