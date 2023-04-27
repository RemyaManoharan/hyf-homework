// function HW 1.1
const dispalyString = () => {
  console.log("Called after 2.5 seconds");
};
setTimeout(dispalyString, 2500);

//function HW 1.2
function dispalyStringLog(delay, stringLog) {
  setTimeout(() => {
    console.log(stringLog);
  }, delay * 1000);
}
dispalyStringLog(3, "This sting is logged after 3 sec");
dispalyStringLog(5, "This sting is logged after 5 sec");

// function H.W 1.3
const btnTag = document.getElementById("btn");
btnTag.addEventListener("click", () => {
  dispalyStringLog(5, "Called after  5 seconds after the button is clicked.");
});

// function H:W 1.4
const earthLogger = () => {
  console.log("earth");
};
const saturnLogger = () => {
  console.log("saturn");
};

function planetLogFunction(callback) {
  const result = callback();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// H:W 1.5
function geoFindMe() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");
  const spanTag = document.getElementById("span");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
