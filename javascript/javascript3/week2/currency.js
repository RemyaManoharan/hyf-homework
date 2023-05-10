const amtInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const convertedAmount = document.getElementById("converted-amount");

let exchangeRates = {};
let fromCurrencyValue = "EUR";
let toCurrencyValue = "DKK";

// Retrieve exchange rates and currencies from the API
async function logCurrencyRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();

    exchangeRates = data.rates;
    const currencies = Object.keys(exchangeRates);

    const fromOption = document.createElement("option");
    fromOption.text = "EUR";
    fromOption.value = "EUR";
    fromCurrency.appendChild(fromOption);

    const toOption = document.createElement("option");
    toOption.text = "DKK";
    toOption.value = "DKK";
    toCurrency.appendChild(toOption);

    currencies.forEach((currency) => {
      const option1 = document.createElement("option");
      option1.text = currency;
      fromCurrency.add(option1);

      const option2 = document.createElement("option");
      option2.text = currency;
      toCurrency.add(option2);
    });
  } catch {
    console.log(error);
  }
}

function convertCurrency() {
  const amountValue = amtInput.value;
  const fromCurrencyRate = exchangeRates[fromCurrencyValue];
  const toCurrencyRate = exchangeRates[toCurrencyValue];
  const convertedValue = (amountValue / fromCurrencyRate) * toCurrencyRate;
  convertedAmount.textContent = convertedValue.toFixed(2);

  const fromCurrencyText =
    fromCurrency.options[fromCurrency.selectedIndex].text;
  const toCurrencyText = toCurrency.options[toCurrency.selectedIndex].text;
  const ratesText = `1 ${fromCurrencyText} = ${exchangeRates[
    toCurrencyValue
  ].toFixed(4)} ${toCurrencyText}`;
  document.getElementById("rates").textContent = ratesText;
}

logCurrencyRates();
amtInput.addEventListener("change", convertCurrency);
fromCurrency.addEventListener("change", (event) => {
  fromCurrencyValue = event.target.value;
  convertCurrency();
});
toCurrency.addEventListener("change", (event) => {
  toCurrencyValue = event.target.value;
  convertCurrency();
});
