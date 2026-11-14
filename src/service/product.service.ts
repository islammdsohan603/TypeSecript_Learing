import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "database", "db.json");

export const productService = () => {
  const result = fs.readFileSync(filePath, "utf-8");

  return JSON.parse(result);
};
