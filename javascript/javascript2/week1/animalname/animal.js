console.log("Siprit animal");

const spiritAnimals = [
  "The crying butterfly",
  " The fullmoon wolf",
  "The Spider",
  "The Crow",
  "The Owl",
  "The Humming bird",
  "The Eagle",
  "The Hawk",
  "The Sparow",
];
const nameTag = document.getElementById("name-input");
const btnTag = document.getElementById("btn");

function generateSpiritAnimal() {
  const nameValue = nameTag.value;

  let index = Math.floor(Math.random() * 10);
  const yourSpiritAnimal = spiritAnimals[index];

  const pTag = document.getElementById("result");
  const nameRegex = /^[a-zA-Z]+$/;
  if (!nameRegex.test(nameValue)) {
    alert("Please enter a valid name"); // show an error message if the input value contains non-alphabetic characters
    nameValue.value = "";
  } else {
    let newName = nameValue.concat("-", yourSpiritAnimal);
    pTag.textContent = newName;
  }
}

const eventTypeRadios = document.getElementsByName("event-type");
function registerEventListeners() {
  for (const radio of eventTypeRadios) {
    radio.addEventListener("change", () => {
      switch (radio.value) {
        case "click":
          nameTag.removeEventListener("mouseover", generateSpiritAnimal);
          nameTag.removeEventListener("keyup", generateSpiritAnimal);
          btnTag.addEventListener("click", generateSpiritAnimal);
          break;
        case "hover":
          btnTag.removeEventListener("click", generateSpiritAnimal);
          nameTag.removeEventListener("keyup", generateSpiritAnimal);
          nameTag.addEventListener("mouseover", generateSpiritAnimal);
          break;
        case "keyup":
          btnTag.removeEventListener("click", generateSpiritAnimal);
          nameTag.removeEventListener("mouseover", generateSpiritAnimal);
          nameTag.addEventListener("keyup", generateSpiritAnimal);
          break;
      }
    });
  }
}
registerEventListeners();
btnTag.addEventListener("click", generateSpiritAnimal);
