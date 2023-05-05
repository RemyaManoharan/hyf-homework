const ulTag = document.getElementById("authorList");
const titleTag = document.getElementById("title");

const url = "https://openlibrary.org/authors/OL23919A/works.json";

const getAuthors = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const books = data.entries;
    console.log(data.entries);
    displayAuthors(books);
  } catch (err) {
    console.log(err);
  }
};
getAuthors();
// the data we got is here a object havings keys 'entries','size', 'links'

const displayAuthors = async (books) => {
  const titles = books.map((book) => {
    return book.title;
  });
  titles.forEach((title) => {
    const litag = document.createElement("li");
    litag.innerHTML = title;
    titleTag.appendChild(litag);
  });
};
