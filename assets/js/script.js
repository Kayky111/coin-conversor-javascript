const from = document.querySelector("#from");
const to = document.querySelector("#to");
const cotation = document.querySelector("#cotation");

const fromValue = document.querySelector("#fromValue");
const toValue = document.querySelector("#toValue");

const renderCoin = async (one) => {
  if (from.value != to.value) {
    const coinURL = await fetch(
      `https://economia.awesomeapi.com.br/json/last/${from.value}-${to.value}`
    );
    const valueCoin = await coinURL.json();
    const bid =
      valueCoin[`${from.value.toUpperCase()}${to.value.toUpperCase()}`][`bid`];
    cotation.innerHTML = `1 ${from.value.toUpperCase()} = ${bid} ${to.value.toUpperCase()}`;
    return (one * bid).toFixed(2);
  } else {
    cotation.innerHTML = `You cannot convert the same coin!`;
  }
};

window.addEventListener("keyup", async () => {
  toValue.value = "Loading...";
  toValue.value = await renderCoin(
    parseFloat(fromValue.value.replace(",", "."))
  );
});

renderCoin();
