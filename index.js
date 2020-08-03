const app = require('./app')
const http = require('http')
const config = require ('./utils/config')
const logger = require('./utils/logger')

const Blog = require('./models/blog')
const server = http.createServer(app)

server.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})

// nodemon installed (npm run dev)
// express installed
// Mongoose installed
// cors installed
// mongoDB saving data to Blogs database with Postman post method
// mongo connection and schema handled in /models/blog.js
// dotenv installed. .env file now has connection uri. .env file is gitignored
// /utils/config file contains uri, index.js and /model/blog.js refer now to /utils/config.js
// /utils/logger.js has a simple logging
// /utils/middleware has errorhandling and
// refactored to app.js and routing in /controllers/blogs.js