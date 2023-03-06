function clothesBaseTemperature(temperature) {
  if (temperature <= 20) {
    return "Jackets and thermals";
  } else if (temperature > 20 && temperature < 25) {
    return "Denim jacket and Jeans";
  } else if (temperature >= 25 && temperature < 40) {
    return "Short sleeve Tshirts and Pants";
  } else if (temperature >= 40) {
    return "cotton clothes and linen";
  }
}

const clothesToWear = clothesBaseTemperature(45);
console.log(clothesToWear);
