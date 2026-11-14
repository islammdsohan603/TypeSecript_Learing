import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "./../service/product.service";

import type { Student } from "../types/student.types";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParams = url?.split("/");
  //   console.log(urlParams)
  const id =
    urlParams && urlParams[1] === "users" ? Number(urlParams[2]) : null;

  //   get all users

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
  } else if (method === "GET" && id !== null) {
    const users = productService();
    const user = users.find((p: Student) => p.id === id);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Single user found successfully",
        data: user,
      }),
    );
  }
};
