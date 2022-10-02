const app = require("./server");
const { Server } = require("socket.io");
const http = require("http");
const sockets = require("./sockets");

const connectDb = require("./db");

require("dotenv").config();

const PORT = process.env.PORT || 4000;

connectDb();
const serverExpress = http.createServer(app);
const httpServer = serverExpress.listen(PORT, "0.0.0.0");
console.log("Server running on port " + PORT);

const io = new Server(httpServer);
sockets(io);
