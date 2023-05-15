import env from "./env.json" assert { type: "json" };

const btnTag = document.getElementById("submit");
const url = `https://api.giphy.com/v1/gifs/search?api_key=${env.apiKey}`;

btnTag.addEventListener("click", async (e) => {
  e.preventDefault();
  const searchTerm = document.getElementById("search-id").value;
  const resultNumber = document.getElementById("count").value || 1;
  searchGiphy(searchTerm, resultNumber);
});
const searchGiphy = async (term, count) => {
  try {
    const apiKey = env.apiKey;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${term}&limit=${count}`;
    const response = await fetch(apiUrl);
    const giffy = await response.json();
    const data = giffy.data;
    console.log(data);
    displayGiphy(data);
  } catch (err) {
    console.log(err);
  }
};

const displayGiphy = async (giffs) => {
  const giffyContainer = document.getElementById("giffy-container");
  giffyContainer.innerHTML = "";
  giffs.forEach((giff) => {
    const imgTag = document.createElement("img");
    imgTag.src = giff.images.fixed_height.url;
    giffyContainer.appendChild(imgTag);
  });
};
