const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authentication.js')

router.use('/auth', require('./auth.js'))
router.use('/users', authenticate, require('./user'))
router.use('/products', authenticate, require('./products'))
router.use('/reviews', authenticate, require('./reviews'))
router.use('/orders', authenticate, require('./orders'))

module.exports = router