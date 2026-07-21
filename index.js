"use strict";
// interface
Object.defineProperty(exports, "__esModule", { value: true });
function calculaterTotal(quantity, price) {
    return {
        quantity,
        totalPrice: price * quantity,
    };
}
console.log(calculaterTotal(8, 451));
//# sourceMappingURL=index.js.map