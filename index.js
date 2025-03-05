const http=require("http");
const app = require("./src/config/express.config");



const httpServer=http.createServer(app)




let HOST="localhost";
let PORT=3011
httpServer.listen(PORT,HOST,(errors)=>console.log(`http://${HOST}:${PORT} successfully listened`))