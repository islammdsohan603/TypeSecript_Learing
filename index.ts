// interface

interface OrderSummery {
  quantity: number;
  totalPrice: number;
}

function calculaterTotal(quantity: number, price: number): OrderSummery {
  return {
    quantity,
    totalPrice: price * quantity,
  };
}

console.log(calculaterTotal(8, 451));
