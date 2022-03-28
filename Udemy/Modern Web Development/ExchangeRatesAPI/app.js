// Elementleri seçme
const amountElement = document.querySelector("#amount");
const targetCurrency = document.querySelector("#secondCurrency");
const currency = new Currency("TRY");

eventListeners();
function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    targetCurrency.onchange = function(){
        currency.changeTargetCurrency(targetCurrency.options[targetCurrency.selectedIndex].textContent)
    }
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange();
}