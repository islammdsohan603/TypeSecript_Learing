import { readFile } from "node:fs/promises";
import path from "node:path";

// Product Type
export type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

// Database Type
type Database = {
  products: Product[];
};

// Database File Path
const filePath = path.join(process.cwd(), "src", "database", "db.json");

// Get All Products
export const productService = async (): Promise<Product[]> => {
  const fileData = await readFile(filePath, "utf-8");

  const database: Database = JSON.parse(fileData);

  return database.products;
};
