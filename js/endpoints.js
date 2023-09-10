const app = require('../index.js')

app.get('/api', (req, res) => {
    info = req.body['query'];
    console.log(info)
    res.send('hello')
})