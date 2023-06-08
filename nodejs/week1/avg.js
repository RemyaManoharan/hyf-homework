const newArguments = process.argv.slice(2);
if (newArguments.length === 0) {
  console.log("Provide some nembers");
} else {
  // convert the arguments to numbers using function Number and filter the non numbers
  const numbers = newArguments.map(Number).filter((num) => !isNaN(num));
  if (numbers.length === 0) {
    console.log("Provide some valid numbers");
  } else {
    const sum = numbers.reduce((acc, cur) => acc + cur, 0);
    const avg = sum / numbers.length;
    console.log(`Average is  ${avg}`);
  }
}
