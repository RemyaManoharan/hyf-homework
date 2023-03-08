function getClothesBasedOnTemperature(temperature) {
  if (temperature <= -20) {
    return "Its very cold outside!Wear 3 layer  clothes!";
  } else if (temperature <= 20) {
    return "Jackets and thermals";
  } else if (temperature > 20 && temperature < 25) {
    return "Denim jacket and Jeans";
  } else if (temperature >= 25 && temperature < 40) {
    return "Short sleeve Tshirts and Pants";
  } else if (temperature >= 40) {
    return "cotton clothes and linen";
  } else if (temperature >= 100) {
    return "High temperature!Please stay at home.Wear light cotton dress ";
  }
}

const clothesToWear = getClothesBasedOnTemperature(45);
console.log(clothesToWear);
