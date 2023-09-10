const express = require("express")
const path = require('path')
const aqi = require('./js/getInfo')

const app = express()
const port = 8056;

const info = require('./js/getInfo')

app.use(express.json())

// info({
//     lon: 47.6061,
//     lat: 122.3328,
// })

app.use(express.static(path.join(__dirname, '/templates')))

app.get('/', (req, res) => {
    console.log('here')
    res.sendFile(path.join(__dirname,'./templates/index.html'))
})

app.post('/api', async (req, res) => {
    const conditions = await req.body['query'];
    const location = req.body['location'];
    const info = await aqi(location, conditions)

    await res.send(info)
})

app.listen(port, () => {
    console.log(`started app listening on port ${port}`)
})

module.exports = app;