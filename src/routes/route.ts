import type { IncomingMessage, ServerResponse } from "node:http";
import productController from "../controllers/product.controller";

const routeHandler = (req: IncomingMessage, res: ServerResponse): void => {
  const url = req.url;
  const method = req.method;

  console.log("URL:", url);
  console.log("Method:", method);

  // Root Route
  if (url === "/" && method === "GET") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        success: true,
        message: "Welcome to Node.js Server!",
      }),
    );
  }

  // Product Route
  else if (url === "/product" && method === "GET") {
    productController(req, res);
  }

  // Method Not Allowed
  else if (url === "/" || url === "/product") {
    res.writeHead(405, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        success: false,
        message: "Method Not Allowed!",
      }),
    );
  }

  // Not Found
  else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        success: false,
        message: "Route Not Found!",
      }),
    );
  }
};

export default routeHandler;
