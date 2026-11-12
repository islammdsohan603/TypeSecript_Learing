import type { IncomingMessage, ServerResponse } from "node:http";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  const products = [
    {
      id: 1,
      name: "PC",
      price: 290,
      stock: 1,
    },
    {
      id: 2,
      name: "Laptop",
      price: 500,
      stock: 2,
    },
    {
      id: 3,
      name: "MacBook",
      price: 1700,
      stock: 5,
    },
  ];

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      success: true,
      message: "Products data retrieved successfully!",
      data: products,
    }),
  );
};

export default productController;
