const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const routeBlog = require('./routes/blog.routes')
const nutritionApi = require('./api/nutrition.api')

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()

// middleware 
app.use(cors())
app.use(express.json())


//routes
// app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname,'./client/build', 'index.html'))
  res.send('Hello World!')
})

// api routes
app.use('/api/v1/', routeBlog)
app.use('/api/nutrition/', nutritionApi)


// database connections
const databaseConnection = () => {
  
  mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log('Atlas Cluster is connected'))
    .catch((err) => console.error(err))
  const db = mongoose.connection
  db.once('open', () => {
    console.log('ATLAS database is connected')
  })
}

databaseConnection()

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})