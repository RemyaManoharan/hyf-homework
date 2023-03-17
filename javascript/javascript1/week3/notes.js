const notes = [];
// function to push objects to array
function saveNote(content, id) {
  const note = { id: id, content: content };
  notes.push(note);
  return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);
// get the note with particular id
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    } else if (id === null || isNaN(id)) {
      return "error string";
    }
  }
}
const firstNote = getNote(2);
console.log(firstNote);
// to read the notes
function logOutNotesFormatted() {
  notes.forEach((element) => {
    console.log(
      `The note with id: ${element.id}, has the following note text "${element.content}"`
    );
  });
}
logOutNotesFormatted();
