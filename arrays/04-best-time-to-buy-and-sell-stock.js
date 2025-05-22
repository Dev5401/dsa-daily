// best time to buy and sell stock

var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5 (Buy at 1, Sell at 6)
console.log(maxProfit([7, 6, 4, 3, 1])); // 0 (No profit possible)
