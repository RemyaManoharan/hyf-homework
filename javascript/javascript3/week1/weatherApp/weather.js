const cityTag = document.getElementById("city");
const btnTag = document.getElementById("submit");
const locationBtnTag = document.getElementById("search");
const messageTag = document.getElementById("message");
const dispalyInfo = document.getElementById("weatherinfo-wrapper");

// eventlistner for submit button
btnTag.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    messageTag.innerText = "";
    const geoCityLocation = await getCityLocation(cityTag.value);

    const result = await getWeatherInfo(
      geoCityLocation.lat,
      geoCityLocation.lon
    );
    console.log(result);
    renderWeatherInfo(result);
  } catch (err) {
    console.log("its this error " + err);
  }
});
// eventlistner for current location button
locationBtnTag.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    messageTag.innerHTML = "Getting current location...";
    const location = await getCurrentLocation();
    const result = await getWeatherInfo(location.latitude, location.longitude);
    renderWeatherInfo(result);
  } catch (err) {
    //error.innerText = "unable to get current location";
    console.log("The error" + err);
  }
});
const getCurrentLocation = async () => {
  try {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    });
    const { latitude, longitude } = position.coords;
    return { latitude, longitude };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to get current location");
  }
};

// get the lat,lon from city name
const getCityLocation = async (cityname) => {
  try {
    const city = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=a97358faa2b07b8bfa9e60a679c71b47`
    );

    const cityData = await city.json();
    //console.log(cityData);
    const { lat, lon } = cityData[0];
    console.log(cityData[0]);
    return { lat, lon };
  } catch (err) {
    console.error(err);
  }
};
// using lat,lon from above function to get weather info
const getWeatherInfo = async (lat, lon) => {
  try {
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a97358faa2b07b8bfa9e60a679c71b47&units=metric`
    );
    const data = await weather.json();
    console.log("weather info", data);
    return data;
  } catch (err) {
    console.error(err);
  }
};

const renderWeatherInfo = (data) => {
  const city1 = document.getElementById("city-name");
  const icon = document.getElementById("icon");
  const temperature = document.getElementById("temperature");
  const speed = document.getElementById("speed");
  const cloudiness = document.getElementById("cloudy");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const headTag = document.getElementById("date-tag");

  const time = showTime();
  headTag.innerHTML = time;
  city1.innerHTML = `${data.name}`;
  temperature.innerHTML = `${data.main.temp.toFixed(0)}°C`;
  icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  speed.innerHTML = `Wind Speed : ${data.wind.speed}m/s`;
  cloudiness.innerHTML = `Cloudiness : ${data.clouds.all}%`;

  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
    "en-US"
  );
  sunrise.innerHTML = `Sunrise : ${sunriseTime}`;

  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString(
    "en-US"
  );
  sunset.innerHTML = `Sunset : ${sunsetTime}`;
};
function showTime() {
  const currentdate = new Date();
  const datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "  " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();
  return datetime;
}
