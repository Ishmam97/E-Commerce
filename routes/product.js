const express = require('express')
const router = express.Router()

const { authenticateJWT } = require('../middlewares/authenticator');

const upload = require('../middlewares/multer')
const productController = require('../controllers/product')
router.post('/' ,authenticateJWT , upload.single('pImg'), productController.create)

router.get('/', productController.readAll)
router.delete('/:pId' , authenticateJWT , productController.delete)
router.patch('/:pId' , authenticateJWT ,upload.single('pImg'), productController.update)
module.exports = router;