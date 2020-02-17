const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.post('/', function (req, res) {
    console.log(`user: ${req.query.user}, pass: ${req.query.pass};`)
    res.send({result: 'ok'})
})
 
app.listen(3000)
