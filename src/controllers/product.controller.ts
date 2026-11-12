import type { IncomingMessage, ServerResponse } from "node:http";
import { productService } from "../service/product.service";

const productController = (req: IncomingMessage, res: ServerResponse) => {
 

  productService()

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      success: true,
      message: "Products data retrieved successfully!",
       
    }),
  );
};

export default productController;
