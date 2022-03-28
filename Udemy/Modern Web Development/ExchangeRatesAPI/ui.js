class UI{
    constructor(targetCurrency){
        this.targetCurrency = targetCurrency;
        this.outputSecond = document.getElementById("outputSecond");
        this.outputResult = document.getElementById("outputResult");

    }
    changeTarget(){
        this.outputSecond.textContent = this.targetCurrency.options[this.targetCurrency.selectedIndex].textContent
    }
    displayResult(result){
        this.outputResult.value = result;
    }
}