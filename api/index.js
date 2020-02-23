const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.post('/', function (req, res) {
    console.log(`user: ${req.query.user}, pass: ${req.query.pass};`)
    res.send({result: 'ok'})
})

app.get('/consents', function(req, res) {
    console.log(`user: ${req.query.user}, pass: ${req.query.pass};`)
    res.send({ "access": {
        "balances": [
            { "iban": "DE40100100103307118608" },
            { "iban": "DE02100100109307118603",
  "currency": "USD"
            },
            { "iban": "DE67100100101306118605" }
          ],
        "transactions": [
            { "iban": "DE40100100103307118608" },
            { "maskedPan": "123456xxxxxx1234" }
          ]
      },
    "recurringIndicator": true,
    "validUntil": "2017-11-01",
    "frequencyPerDay": "4"})
})
 
app.listen(3000)
