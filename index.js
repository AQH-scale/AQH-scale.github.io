const express = require("express")
const path = require('path')

const app = express()
const port = 8056;

const info = require('./js/getInfo')

// info({
//     lon: 47.6061,
//     lat: 122.3328,
// })

app.use(express.static(path.join(__dirname, '/templates')))

app.get('/', (req, res) => {
    console.log('here')
    res.sendFile(path.join(__dirname,'./templates/index.html'))
})

app.listen(port, () => {
    console.log(`started app listening on port ${port}`)
})