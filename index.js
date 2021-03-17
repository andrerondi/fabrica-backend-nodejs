const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('hello World')
})

app.listen(3000, function() {
    console.info('App rodando em http://localhost:3000')
})