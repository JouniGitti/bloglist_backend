const config = require('../utils/config')
const mongoose = require('mongoose')

console.log('connecting to MongoDB')
mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(result => {
    console.log ('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error occurred when connecting to MongoDB:', error.message)
})


const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)