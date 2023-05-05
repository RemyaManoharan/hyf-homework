console.log("Hello");

const button = document.getElementById("button");
const input = document.getElementById("inputName");
const textArea = document.getElementById("textarea");
const happy = document.getElementById("happy");
const sad = document.getElementById("sad");
const neutral = document.getElementById("neutral");
const Resultdiv = document.getElementsByClassName("fade show");

const getUserAnalysis = async (string) => {
  const url = `https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=${string}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e0c2cb79bfmsh74450775b975ec4p1c874bjsn3cbd7fc871e3",
      "X-RapidAPI-Host": "twinword-sentiment-analysis.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
    const resultObj = JSON.parse(result);
    console.log(resultObj);
    return resultObj;
  } catch (error) {
    console.error(error);
  }
};

button.addEventListener("click", async (e) => {
  e.preventDefault();
  if (input.value && textArea.value) {
    const result = await getUserAnalysis(textArea.value);
    const str = input.value;
    const name = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    analysAndDisplay(result, name);
    //reset();
  }
});

const analysAndDisplay = (result, name) => {
  if (result) {
    const { type, score } = result;
    if (type === "positive") {
      happy.style.display = "block";
      sad.style.display = "none";
      neutral.style.display = "none";
      Resultdiv[0].classList.add("alert-success");
      Resultdiv[0].textContent = `Hey there ${name}. You are clearly happy! :)`;
    } else if (type === "negative") {
      happy.style.display = "none";
      sad.style.display = "block";
      neutral.style.display = "none";
      Resultdiv[0].classList.add("alert-primary");
      Resultdiv[0].textContent = `I'm sorry ${name}. You are clearly sad! :(`;
    } else {
      happy.style.display = "none";
      sad.style.display = "none";
      neutral.style.display = "block";
      Resultdiv[0].classList.add("alert-info");
      Resultdiv[0].textContent = `Hello ${name}. You are so-so :|`;
    }
  } else {
    Resultdiv[0].classList.add("alert-danger");
    Resultdiv[0].textContent = `Hello ${name}. We couldn't determine your sentiment. Please try again.`;
  }
};
