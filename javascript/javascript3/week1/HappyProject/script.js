import env from "./env.json" assert { type: "json" };

const nameInput = document.getElementById("inputName");
const msgInput = document.getElementById("inputMsg");
const alerts = {
  positive: document.getElementById("alert-happy"),
  negative: document.getElementById("alert-sad"),
  neutral: document.getElementById("alert-soso"),
};

const hideAlerts = () => {
  Object.values(alerts).forEach((alert) => {
    alert.hidden = true;
  });
};

hideAlerts();

const getData = async (text) => {
  try {
    const res = await fetch(`https://${env.baseURL}/analyze/`, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": env.apiToken,
        "X-RapidAPI-Host": env.baseURL,
      },
      body: new URLSearchParams({ text }),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

document.getElementById("submitBtn").addEventListener("click", async () => {
  const { result_msg, type, score } = await getData(msgInput.value);
  if (result_msg === "Success") {
    const alert = alerts[type];
    hideAlerts();
    const strong = Math.abs(score) > 0.5 ? " very " : " ";
    const feeling = {
      positive: "happy 😀",
      negative: "sad 🥲",
      neutral: "so-so 😕",
    }[type];
    alert.innerText = `Hi ${nameInput.value}, you are${strong + feeling}`;
    alert.hidden = false;
  } else {
    alert("Processing failed");
  }
});
