class Currency {
    constructor(targetCurrency){
        this.targetCurrency = targetCurrency;
        this.url = `http://api.exchangeratesapi.io/v1/latest?access_key=b27f61de6cfaf922be2155544544a7fd&symbols=`
        this.amount = null;
    }
    exchange(){
        fetch(this.url + this.targetCurrency)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeTargetCurrency(newTargetCurrency){
        currency.changeAmount(amountElement.value);
        this.targetCurrency = newTargetCurrency;
    }
}