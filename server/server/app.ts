import http, { IncomingMessage, Server, ServerResponse } from "http";
import fs from "fs";
import path from "path";
/*
implement your server code here
*/

console.log();
let data = fs.readFileSync(path.join(__dirname, "../data/db.json"), {
  encoding: "utf-8",
});
let error: object = { message: "Route Not Found" };
// console.log(data.toString());

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.url === "/api/v1/products" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data.toString());
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify(error));
    }
  }
);

server.listen(3005, "127.0.0.1", () => {
  console.log("Listening to request on port 3005...");
});
