import express from 'express'
import path from 'path'
import mongoose from 'mongoose'

require('dotenv').config()

const { PORT = 4000, MONGODB_URL } = process.env

mongoose
  .connect(MONGODB_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(console.error)

// express likes to call the server "app"
const app = express()

// // add middleware for json data
// app.use('/api', express.json()) // (req, res, next) => {...}
// app.use('/api/users', require('./routes/users'))
// app.use('/api/cards', require('./routes/cards'))
// app.use(express.static('client/build'))

// // redirect to index.html
// app.use('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })

// // error route
// app.use(require('./routes/error'))

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})
