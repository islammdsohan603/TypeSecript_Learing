import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controllers/product.controller";

export const routerHandler = (req: IncomingMessage, res: ServerResponse) => {
  const url = req.url;
  const method = req.method;

  if (url === "/" && method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: true, message: "This is Root Route" }));
  } else if (url?.startsWith("/users")) {
    productController(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "This is not Found" }));
  }
};
