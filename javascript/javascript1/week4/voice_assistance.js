let fName = "";
const todos = [];
let timer;

function setName(action, words) {
  fName = words.slice(words.indexOf("is") + 1, words.length).join(" ");
  return `Nice to meet you ${fName}`;
}

function getName(action, words) {
  return fName ? `Your name is ${fName}` : `please tell your name`;
}

function addTodo(action, words) {
  const todo = words
    .slice(words.indexOf("add") + 1, words.indexOf("to"))
    .join(" ");
  todos.push(todo);

  return `${todo} added to your todo`;
}
function removeItemTodo(action, words) {
  //select item
  const todo = words
    .slice(words.indexOf("remove") + 1, words.indexOf("from"))
    .join(" ");
  //select the index of item to removed
  const index = todos.indexOf(todo);
  //if item present, remove(splice)
  if (index !== -1) {
    todos.splice(index, 1);
    return `Removed ${todo} from your todo`;
  } else {
    return `${todo} is not on your todo list`;
  }
}

function getItemTodo(action, words) {
  const todoCount = todos.length;
  if (todoCount === 0) {
    return "You have no todos";
  } else {
    let todoList = todos.join(" ,");
    return `You have ${todoCount} todos includes ${todoList}`;
  }
}

function getDate(action, words) {
  const date = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
function simpleMath(action, words) {
  const mathExpArray = words.slice(2);
  const mathExp = mathExpArray.join(" ");
  const result = eval(mathExp);
  return `Solution for ${mathExp}: ${result}`;
}
function setTimer(action, words) {
  const minutes = words[words.indexOf("for") + 1];
  setTimeout(function () {
    console.log("Timer done");
  }, minutes * 60 * 100);
  return `Timer set for ${minutes} minutes`;
}

function getReply(command) {
  let words = command.toLowerCase().split(" ");
  const action = words[0];
  if (action === "hello" && words.includes("name")) {
    console.log(setName(action, words));
  }
  if (action === "what" && words.includes("name")) {
    console.log(getName(action, words));
  }
  if (action === "add" && words.includes("todo")) {
    console.log(addTodo(action, words));
  }
  if (action === "remove" && words.includes("todo")) {
    console.log(removeItemTodo(action, words));
  }
  if (action === "what" && words.includes("todo")) {
    console.log(getItemTodo(action, words));
  }
  if (action === "what" && words.includes("day")) {
    console.log(getDate(action, words));
  }
  if (
    (action === "what" && words.includes("+")) ||
    words.includes("-") ||
    words.includes("*") ||
    words.includes("/")
  ) {
    console.log(simpleMath(action, words));
  }
  if (action === "set" && words.includes("timer")) {
    console.log(setTimer(action, words));
  } else if (!action) console.log("Sorry..Could not understand.Please repeat");
}

getReply("Hello my name is Benjamin");
getReply("");
getReply("Hello my name is Benjamin"); // "Nice to meet you benjamin"
getReply("What is my name ?"); // "Your name is Benjamin"
getReply("Add fishing to my todo");
getReply("Add jumbing to my todo"); // "fishing added to your todo"
getReply("Remove jumbing from my todo");
getReply("What is on my todo ?");
getReply("What day is today");
getReply("What is 8 + 5");
getReply("what is 8 - 5");
getReply("what is 8 * 5");
getReply("Set a timer for 1 minutes");
