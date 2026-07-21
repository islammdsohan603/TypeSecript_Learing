"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createProduct(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        totalPrice: price * quantity,
    };
}
console.log(createProduct("Laptop", 50000, 2));
console.log(createProduct("Mobaile", 540, 12));
//# sourceMappingURL=index.js.map