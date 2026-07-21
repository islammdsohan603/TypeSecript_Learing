type Product = {
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

function createProduct(name: string, price: number, quantity: number): Product {
  return {
    name,
    price,
    quantity,
    totalPrice: price * quantity,
  };
}

console.log(createProduct("Laptop", 50000, 2));
console.log(createProduct("Mobaile", 540, 12));
