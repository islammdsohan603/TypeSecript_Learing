// Type Alies

type OrderSummary = {
  qunatity: number;
  totalPrice: number;
};

function calculaterTotal(qunatity: number, price: number): OrderSummary {
  return {
    qunatity,
    totalPrice: qunatity * price,
  };
}

console.log(calculaterTotal(2, 981));
