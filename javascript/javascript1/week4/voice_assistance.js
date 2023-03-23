let fName = "";
const todos = [];
let timer;
function getReply(command) {
  let words = command.toLowerCase().split(" ");
  const action = words[0];

  if (action === "hello" && words.includes("name")) {
    fName = words.slice(words.indexOf("is") + 1, words.length).join(" ");
    return `Nice to meet you ${fName}`;
  }

  if (action === "what" && words.includes("name")) {
    if (fName) {
      return `Your name is ${fName}`;
    } else return `I don't know your name`;
  }

  if (action === "add" && words.includes("todo")) {
    //words between 'add' and 'to todo' are sliced and joined
    //to get the todos
    const todo = words
      .slice(words.indexOf("add") + 1, words.indexOf("to"))
      .join(" ");
    todos.push(todo);
    console.log(todo);
    return `${todo} added to your todo`;
  }
  //to remove item from todos
  if (action === "remove" && words.includes("todo")) {
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
  // select items from todos
  if (action === "what" && words.includes("todo")) {
    const todoCount = todos.length;
    if (todoCount === 0) {
      return "You have no todos";
    } else {
      let todoList = "You have " + todoCount + " todos";
      todoList += " - " + todos.join(" ,");
      return todoList;
    }
  }
  // get todays date

  if (action === "what" && words.includes("day")) {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  // maths function

  if (action === "what" && words.includes("+")) {
    let num1 = parseInt(
      words.slice(words.indexOf("is") + 1, words.indexOf("+")).join(" ")
    );

    let num2 = parseInt(
      words.slice(words.indexOf("+") + 1, words.length).join(" ")
    );
    result = add(num1, num2);
    return result;
  }
  if (action === "what" && words.includes("-")) {
    let num1 = parseInt(
      words.slice(words.indexOf("is") + 1, words.indexOf("+")).join(" ")
    );

    let num2 = parseInt(
      words.slice(words.indexOf("-") + 1, words.length).join(" ")
    );
    result = substract(num1, num2);
    return result;
  }
  if (action === "what" && words.includes("*")) {
    let num1 = parseInt(
      words.slice(words.indexOf("is") + 1, words.indexOf("+")).join(" ")
    );

    let num2 = parseInt(
      words.slice(words.indexOf("*") + 1, words.length).join(" ")
    );
    result = multiply(num1, num2);
    return result;
  }

  if (action === "set" && words.includes("timer")) {
    const minutes = words[words.indexOf("for") + 1];

    setTimeout(function () {
      console.log("Timer done");
    }, minutes * 60 * 100);
    return `Timer set for ${minutes} minutes`;
  }
  return "Sorry, I don't understand";
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name ?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add jumbing to my todo")); // "fishing added to your todo"
console.log(getReply("Remove jumbing from my todo"));
console.log(getReply("What is on my todo ?"));
console.log(getReply("What day is today"));
console.log(getReply("what is 8 + 5"));
console.log(getReply("what is 8 - 5"));
console.log(getReply("what is 8 * 5"));
console.log(getReply("Set a timer for 1 minutes"));

function add(num1, num2) {
  return num1 + num2;
}
function substract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
