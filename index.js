const currencyFirstEl = document.getElementById("currency-first");
const worthFirsttEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");
const worthFSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/106867ac0e1e9c78ae4c736f/latest/${currencyFirstEl.value}`)
    .then((response)=>response.json())
    .then((data)=>{
        const rate = data.conversion_rates[currencySecondEl.value];
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;

        worthFSecondEl.value = (worthFirsttEl.value * rate).toFixed(2);
    });
}

currencyFirstEl.addEventListener("change", updateRate);

currencySecondEl.addEventListener("change", updateRate);

worthFirsttEl.addEventListener("input", updateRate);
