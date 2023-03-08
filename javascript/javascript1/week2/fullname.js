const getFullname = (firstName, surName, useFormalName) => {
  if (!firstName || firstName === " " || !surName || surName === " ") {
    return "please provide your name";
  } else {
    if (useFormalName) {
      return `Lord ${firstName} ${surName}`;
    } else return `${firstName} ${surName}`;
  }
};
console.log(getFullname("John", "Mary", true));
console.log(getFullname("Rosh", "Susan", false));
console.log(getFullname(" ", "Mary", true));

// resolving the above code  for women

const getFullnameW = (firstName, surName, useFormalName, gender) => {
  if (!firstName || firstName === " " || !surName || surName === " ") {
    return "please provide your name";
  } else {
    if (useFormalName && gender === "male") {
      return `Lord ${firstName} ${surName}`;
    } else if (useFormalName && gender === "female") {
      return `Lady ${firstName} ${surName}`;
    } else return `${firstName} ${surName}`;
  }
};

console.log(getFullnameW("Rosh", "Susan", true, "female"));
console.log(getFullnameW("John", "Peter", false, "male"));
