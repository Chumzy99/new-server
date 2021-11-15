import http, { IncomingMessage, Server, ServerResponse } from "http";
/*
implement your server code here
*/

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET") {
      res.end(JSON.stringify({ name: "hello" }));
    }
  }
);

server.listen(3005, "127.0.0.1", () => {
  console.log("Listening to request on port 3005...");
});
