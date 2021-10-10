const dotenv = require('dotenv')
dotenv.config()

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const fetch = require('node-fetch')

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// app.get('/test', function (req, res) {
//     //res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
//     res.send(mockAPIResponse)
// })

app.post('/submit', function(req,res) {
  console.log(req.body)
  fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&&lang=en&&url=${req.body.url}`, {
    method: 'POST',
  })
  .then(data => data.json())
  .then(data => {
    console.log(data)
    res.send(data)
  })
})
