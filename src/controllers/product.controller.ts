import type { IncomingMessage, ServerResponse } from "http";
import { productService } from "./../service/product.service";

import type { Student } from "../types/student.types";
import { bodyParser } from "../utils/parsebody";

export const productController = async (
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
  }
  // single users
  else if (method === "GET" && id !== null) {
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
  } else if (method === "POST" && url === "/users") {
    const body = await bodyParser(req);
    console.log(body);

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        success: true,
        message: "Single user post successfully!",
      }),
    );
  }
};
