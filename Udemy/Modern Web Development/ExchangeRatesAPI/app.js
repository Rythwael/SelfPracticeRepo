// Elementleri seçme
const amountElement = document.querySelector("#amount");
const targetCurrency = document.querySelector("#secondCurrency");
const currency = new Currency("TRY");
const ui = new UI(targetCurrency);

eventListeners();
function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    targetCurrency.onchange = function(){
        currency.changeTargetCurrency(targetCurrency.options[targetCurrency.selectedIndex].textContent)
        ui.changeTarget()
        exchangeCurrency()
    }
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result=> {
        ui.displayResult(result);
    })
    .catch(err => console.log(err))
}