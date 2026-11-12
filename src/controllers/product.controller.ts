import type { IncomingMessage, ServerResponse } from "node:http";
import { productService } from "../service/product.service";

const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> => {
  try {
    // Get products from service
    const products = await productService();

    // Send response
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        success: true,
        message: "Products retrieved successfully!",
        data: products,
      }),
    );
  } catch (error) {
    console.error("Product Controller Error:", error);

    res.writeHead(500, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        success: false,
        message: "Internal Server Error!",
      }),
    );
  }
};

export default productController;
