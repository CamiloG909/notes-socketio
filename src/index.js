const app = require("./server");
const { Server } = require("socket.io");
const http = require("http");
const sockets = require("./sockets");

const connectDb = require("./db");

require("dotenv").config();

connectDb();
const serverExpress = http.createServer(app);
const httpServer = serverExpress.listen(4000);
console.log("Server running on port 4000");

const io = new Server(httpServer);
sockets(io);
