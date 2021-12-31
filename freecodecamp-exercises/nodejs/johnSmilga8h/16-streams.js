const fs = require('fs')

const stream = fs.createReadStream('./content/big.txt',{
    highWaterMark:90000
});

//default 64kb
//last buffer - remainder
//highWaterMark - control size
// const stream = fs.createReadStream('./content/big.txt',{highWaterMark:90000}); - 90kb size
// const stream = fs.createReadStream('./content/big.txt',{encoding: 'utf8'}); - shows data




stream.on('data',(result)=>{
    console.log(result);
})

stream.on('error',(err)=> console.log(err))
