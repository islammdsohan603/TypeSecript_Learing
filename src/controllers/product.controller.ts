import type { IncomingMessage, ServerResponse } from "http";

const productController = (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      success: true,
      message: "This is root route!",
    }),
  );
};

export default productController;
