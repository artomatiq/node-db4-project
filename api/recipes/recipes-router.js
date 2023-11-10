const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(900).json('hello')
})

module.exports = router