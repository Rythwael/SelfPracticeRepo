class Currency {
    constructor(targetCurrency){
        this.targetCurrency = targetCurrency;
        this.url = `http://api.exchangeratesapi.io/v1/latest?access_key=b27f61de6cfaf922be2155544544a7fd&symbols=`
        this.amount = null;
    }
    exchange(){
        return new Promise((resolve,reject)=>{
            fetch(this.url + this.targetCurrency)
            .then(response => response.json())
            .then(data => {
                const exchangeValue = data.rates[this.targetCurrency]
                const inputAmount = Number(this.amount)
                let total = exchangeValue*inputAmount;
                resolve(total);
            })
            .catch(err => reject(err))
        })
        
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeTargetCurrency(newTargetCurrency){
        this.targetCurrency = newTargetCurrency;
    }
}