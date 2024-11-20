const timee = document.querySelector("h3");
const chart = document.querySelector("h1");
const disclaimer = document.querySelector("p");
const usd = document.querySelector(".usd");
const usdCurrency = document.querySelector(".usd-currenccy");
const usdSymbol = document.querySelector(".usd-symbol");
const usdcode = document.querySelector(".usd-code");
const usdDescrtion = document.querySelector(".usd-descrition");
const usdRate = document.querySelector(".usd-rate");
const usdRateFloat = document.querySelector(".usd-rate-float");

const EURrate = document.querySelector(".eur-rate");
const EURrateFloat = document.querySelector(".eur-rate-float");
const Gbprate = document.querySelector(".gbp-rate");
const GbprateFloat = document.querySelector(".gbp-rate-float");

let myrequest = new XMLHttpRequest();

myrequest.open(
  "get",
  "https://api.coindesk.com/v1/bpi/currentprice.json",
  true
);
myrequest.send();

myrequest.onload = function () {
  let worktool = JSON.parse(myrequest.responseText);
  

  timee.textContent += worktool.time.updateduk;
  chart.textContent += worktool.chartName;
  disclaimer.textContent += worktool.disclaimer;
  usdCurrency.textContent = worktool.bpi.USD.code;
  usdcode.textContent = worktool.bpi.USD.code;
  usdDescrtion.textContent = worktool.bpi.USD.description;
  usdRate.textContent = worktool.bpi.USD.rate;
  usdRateFloat.textContent = worktool.bpi.USD.rate_float;
  EURrate.textContent = worktool.bpi.EUR.rate;
  EURrateFloat.textContent = worktool.bpi.EUR.rate_float;
  Gbprate.textContent = worktool.bpi.GBP.rate;
  GbprateFloat.textContent = worktool.bpi.GBP.rate_float;
};
