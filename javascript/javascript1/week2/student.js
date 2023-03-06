const class07Students = [];

function addStudentToClass(studentName) {
  //call function to get the strength of class
  let strength = getNumberOfStudents(class07Students);
  //console.log("strength of class is " + strength);

  if (strength >= 7 && studentName.toUpperCase() != "QUEEN") {
    console.log("Cannot add more students to class 07");
    return class07Students;
  } else if (class07Students.includes(studentName.toUpperCase())) {
    return `Student ${studentName} is already in the class`;
  } else if (!studentName) {
    return "cannot add empty string";
  } else if (studentName.toUpperCase() === "QUEEN") {
    class07Students.push(studentName.toUpperCase());
    return class07Students;
  } else if (strength < 7) {
    class07Students.push(studentName.toUpperCase());
    return class07Students;
  }
}
function getNumberOfStudents(class07Students) {
  let strength = class07Students.length;
  console.log(strength);
  return strength;
}

console.log(addStudentToClass("aarav"));
console.log(addStudentToClass("Mariya"));
console.log(addStudentToClass("mariya"));
console.log(addStudentToClass("Vasuki"));
console.log(addStudentToClass("Aarav"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Jerin"));
console.log(addStudentToClass("Meeru"));
console.log(addStudentToClass("Meena"));
console.log(addStudentToClass("John"));
console.log(addStudentToClass("Albert"));
console.log(addStudentToClass("Queen"));
// console.log(addStudentToClass("Jenni"));
