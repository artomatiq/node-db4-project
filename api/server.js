const express = require('express')
const recipesRouter = require('../api/recipes/recipes-router')

const server = express()

server.use(express.json())

server.use('/api/recipes', recipesRouter)

server.use('*', (req, res, next) => {
    res.status(404).json({message: 'not found'})
})

server.use( (error, req, res, next)=> {
    res.status(error.status || 500).json({
        message: error.message || 'error',
        stack: error.stack
    })
})

module.exports = server