import { createServer, IncomingMessage, Server, ServerResponse } from "http";

const server: Server = createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    if (url === "/" && method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: true, message: "This is Root Route" }));
    } else if (url?.startsWith("/product")) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({ success: true, message: "This is Products Route" }),
      );
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ success: false, message: "This is not Found" }));
    }
  },
);

server.listen(5000, () => {
  console.log("Server is Runnig Successfully!!");
});
