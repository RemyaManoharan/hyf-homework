const getFullname = (firstName, surName, useFormalName) => {
  if (useFormalName) {
    return `Lord ${firstName} ${surName}`;
  } else return `${firstName} ${surName}`;
};

console.log(getFullname("James", "Mary", true));
console.log(getFullname("Rosh", "Susan", false));
console.log(getFullname("James", "Mary", true));

// resolving the above code  for women

const getFullnameW = (firstName, surName, useFormalName, gender) => {
  if (useFormalName && gender === "male") {
    return `Lord ${firstName} ${surName}`;
  } else if (useFormalName && gender === "female") {
    return `Lady ${firstName} ${surName}`;
  } else return `${firstName} ${surName}`;
};

console.log(getFullnameW("Rosh", "Susan", true, "female"));
console.log(getFullnameW("John", "Peter", false, "male"));
