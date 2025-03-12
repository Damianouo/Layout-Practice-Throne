const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.36,
  AUD: 1.53,
  AED: 3.67,
  BGN: 1.82,
  BRL: 4.94,
  CHF: 0.91,
};

export function calcPriceInCurrency(price, currency) {
  return parseFloat((price * exchangeRates[currency]).toFixed(2));
}

export function calcTotalPrice(items, currency) {
  const sum = items.reduce(
    (acc, cur) => acc + calcPriceInCurrency(cur.price, currency) * (cur.count || 1),
    0,
  );
  return parseFloat(sum.toFixed(2));
}
