import { createServer, IncomingMessage, Server, ServerResponse, } from "node:http";
const server = createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log("URL:", url);
    console.log("Method:", method);
    // Root Route
    if (url === "/" && method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({
            success: true,
            message: "This is root route!",
        }));
    }
    // Product Route
    else if (url?.startsWith("/product") && method === "GET") {
        res.writeHead(200, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({
            success: true,
            message: "This is product route!",
        }));
    }
    // Method Not Allowed
    else if (url === "/" && method !== "GET") {
        res.writeHead(405, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({
            success: false,
            message: "Method Not Allowed!",
        }));
    }
    // Not Found
    else {
        res.writeHead(404, {
            "Content-Type": "application/json",
        });
        res.end(JSON.stringify({
            success: false,
            message: "This route is not found!",
        }));
    }
});
// Start Server
server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});
//# sourceMappingURL=server.js.map