import env from "./env.json" assert { type: "json" };

const btnTag = document.getElementById("submitBtn");
// const saveBtnTag = document.getElementById("saveBtn");
const urltag = document.getElementById("url");
const message = document.getElementById("message");
const screenshotList = document.getElementById("screenshotList");
const screenshotTag = document.getElementsByClassName("screenshot-wrapper");
let screenshotUrl;

// function to get screenshot
const getData = async (urltag) => {
  const url = `https://website-screenshot6.p.rapidapi.com/screenshot?url=${urltag}&width=1000&height=800&fullscreen=false`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": env.apikey,
      "X-RapidAPI-Host": "website-screenshot6.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
// on button click call getData() to get screen shot
btnTag.addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await getData(urltag.value);
  screenshotUrl = JSON.parse(data).screenshotUrl;
  displayScreenShot(screenshotUrl);
  showPubMessage();
});

// function to display screenshot from api
function displayScreenShot(screenshotUrl) {
  console.log(screenshotUrl);
  const image = document.querySelector(".screenshot");
  image.src = screenshotUrl;
  image.alt = "website-screenshot";
  const screenshotWrapper = document.querySelector(".screenshot-wrapper");
  const saveButton = document.createElement("button");
  saveButton.id = "saveBtn";
  saveButton.innerText = "Save Screenshot";
  screenshotWrapper.appendChild(saveButton);
}
// messages to the user
function showSavingMessage() {
  message.innerText = "Your screen shot has saved to server";
}
function showPubMessage() {
  message.innerText = "Please wait... Publishing your screenshot";
}

// save button click event
document.addEventListener("click", async (e) => {
  if (e.target && e.target.id === "saveBtn") {
    e.preventDefault();
    postData();
    showSavingMessage();
  }
});

// function to call save the screenshots to crudcrud api
const postData = async () => {
  const apiUrl = `https://crudcrud.com/api/${env.crudApiKey}/screenshots`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ screenshotUrl: screenshotUrl }),
  };

  try {
    const response = await fetch(apiUrl, options);
    const savedData = await response.json(); // {screenshoturl : , id : }
    showSavedUrlList(savedData);
  } catch (error) {
    console.log(error);
  }
};

function showSavedUrlList(savedData) {
  console.log(savedData);
  const screenshots = document.querySelector(".screenshots");
  screenshots.style.display = "block";
  const screenshotItem = document.createElement("li");
  screenshotItem.innerHTML = `
      <a href="${savedData.screenshotUrl}" target="_blank">${urltag.value}</a>
      <button class="deleteButton" data-id="${savedData._id}">Delete</button>
    `;
  screenshotList.appendChild(screenshotItem);
}
document.addEventListener("click", async (e) => {
  if (e.target && e.target.classList.contains("deleteButton")) {
    e.preventDefault();
    const id = e.target.dataset.id;
    await deleteScreenshot(id);
    e.target.closest("li").remove();
  }
});

// function to call the delete API endpoint

const deleteScreenshot = async (id) => {
  const apiUrl = `https://crudcrud.com/api/${env.crudApiKey}/screenshots/${id}`;
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(apiUrl, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
