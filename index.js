const express = require('express')
const { request } = require('express')

const app = express()

app.get('/home', (request, response)=>{
    response.send('Welcome to my first backend')
})

