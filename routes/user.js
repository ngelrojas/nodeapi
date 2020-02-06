const express = require('express')
const {userById, allUsers} = require('../controllers/user')

const router = express.Router()

router.get('/users', allUsers)

// any route contaning :userId, our app will first execute userByID
router.param('userId', userById)

module.exports = router
