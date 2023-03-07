const candyPriceTable = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewing_gum: 0.03,
};
const boughtCandyPrices = [];
let totalPrice = 0;
function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    priceOfCandy = weight * candyPriceTable.sweet;
    console.log("sweet" + priceOfCandy);
  } else if (candyType === "chocolate") {
    priceOfCandy = weight * candyPriceTable.chocolate;
  } else if (candyType === "toffee") {
    priceOfCandy = weight * candyPriceTable.toffee;
  } else if (candyType === "chewing-gum") {
    priceOfCandy = weight * candyPriceTable.chewing_gum;
  }
  boughtCandyPrices.push(priceOfCandy);
}
function getPriceOfCandyPurchased(boughtCandyPrices) {
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice = totalPrice + priceOfCandy;
  }
  return totalPrice;
}
function canBuyMoreCandy(boughtCandyPrices) {
  console.log(`The total price for candy purchased ${totalPrice}`);
  const amountToSpend = Math.floor(Math.random() * 100);
  console.log(`Amount your hand is ${amountToSpend}`);
  const result = totalPrice < amountToSpend ? true : false;
  return result;
}

addCandy("chocolate", 20);
addCandy("chocolate", 30);
addCandy("Sweet", 10);
//addCandy("toffee", 10);
getPriceOfCandyPurchased(boughtCandyPrices);
const canBuyMore = canBuyMoreCandy(boughtCandyPrices);
const result = canBuyMore
  ? "You can buy more,so please do!"
  : "Enough candy for you";
console.log(result);
