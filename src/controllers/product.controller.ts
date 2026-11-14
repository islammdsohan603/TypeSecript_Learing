import type { IncomingMessage, ServerResponse } from "http";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  if (url === "/product" && method === "GET") {
    const proudcts = [
      {
        id: 1,
        name: "PC",
        price: 200,
      },
      {
        id: 2,
        name: "PC",
        price: 200,
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Products Show in Browers ",
        data: proudcts,
      }),
    );
  }
};
