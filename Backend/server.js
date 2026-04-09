const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000;
require('dotenv').config()

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


// 2:46:00 last completed