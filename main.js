const express = require('express')
const app = express()
const path = require('path');

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
 // res.send("about page");
  console.log('testing')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})