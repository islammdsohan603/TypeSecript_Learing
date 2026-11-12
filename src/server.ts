import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(req);
});

server.listen(5000, () => {
  console.log("Server is running successfully!");
});
