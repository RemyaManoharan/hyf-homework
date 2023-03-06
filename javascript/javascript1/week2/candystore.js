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
    priceOfCandy = weight * candyPriceTable.toffee;
  }
  boughtCandyPrices.push(priceOfCandy);

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice = totalPrice + priceOfCandy;
  }

  return totalPrice;
}
function canBuyMoreCandy(boughtCandyPrices) {
  console.log(`The total price for candy purchased ${totalPrice}`);
  const amountToSpend = Math.floor(Math.random() * 100);
  console.log(`Amount your hand is ${amountToSpend}`);
  if (totalPrice < amountToSpend) {
    return true;
  } else {
    return false;
  }
}

addCandy("chocolate", 20);
//addCandy("chocolate", 30);
addCandy("Sweet", 10);
addCandy("toffee", 10);

const result = canBuyMoreCandy(boughtCandyPrices);
if (result) {
  console.log("You can buy more,so please do!");
} else {
  console.log("Enough candy for you");
}
