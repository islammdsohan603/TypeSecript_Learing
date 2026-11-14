import { createServer } from "http";

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      success: true,
      message: "Server is working",
    }),
  );
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
