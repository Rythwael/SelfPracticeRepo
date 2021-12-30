const fs = require('fs')

console.log('1.Step'); //1.Output

fs.readFile('../content/first.txt','utf-8',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log(res); //3.Output
    console.log('1.Step completed.'); //4.Output
})
console.log('Starting 2.Step'); //2.Output