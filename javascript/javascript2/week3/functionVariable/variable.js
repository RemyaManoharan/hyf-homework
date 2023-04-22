// H:W 2.1 Create an array with 3 items. All items should be functions.
// Iterate through the array and call all the functions.
const add = (a, b) => {
  console.log(a + b);
};
const substract = (a, b) => {
  console.log(a - b);
};
const multiply = (a, b) => {
  console.log(a * b);
};

const functionArray = [add, substract, multiply];
functionArray.forEach((item) => {
  item(5, 2);
});

// H:W 2.2 Create a function as a const and try creating a function normally. Call both functions.

// anonymous function
const display = () => {
  console.log("I am a function declared as variable");
};
// function declaration
function displayLog() {
  console.log("I am a function created normally");
}
display();
displayLog();

// H:W 2.3 Create an object that has a key whose value is a function
const product = {
  id: generateRandomId(),
};
function generateRandomId() {
  return Math.floor(Math.random() * 100);
}
console.log(`Your id is ${product.id}`);
