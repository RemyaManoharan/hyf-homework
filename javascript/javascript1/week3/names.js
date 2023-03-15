const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

function removeName(nameToRemove) {
  let index = names.indexOf(nameToRemove);
  names.splice(index, 1);
  console.log(names);
}
removeName("Ahmad");
