const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 3000;
const {handler} = require("./controller")

const app = express()
app.use(express.json())

app.get('*', async (req, res) => {
  res.send('Hello World!')
})

app.post('*', async (req, res) => {
  console.log(req.body)
  res.send(await handler(req))
})

app.listen(port, (error) => {
  console.log(`Example app listening on port ${port}`)
  if (error) console.error(error)
})