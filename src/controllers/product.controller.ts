import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "../service/product.service";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  if (url === "/users" && method === "GET") {
    const products = productService();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Products Show in Browers ",
        data: products,
      }),
    );
  }
};
