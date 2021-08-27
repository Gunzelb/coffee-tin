const router = require('express').Router()
const userRoutes = require('./userRoutes')
const projectRoutes = require('./projectRoutes')
const checkoutRoutes = require('./checkoutRoutes')

router.use('/users', userRoutes)
router.use('/projects', projectRoutes)
router.use('/checkout', checkoutRoutes)

module.exports = router
