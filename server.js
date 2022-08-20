const express = require('express')
const dotenv = require('dotenv')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const path = require('path')
// const router = require('./routes/routes')

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})