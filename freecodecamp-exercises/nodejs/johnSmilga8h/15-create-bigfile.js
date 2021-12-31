
const {writeFileSync} = require('fs')
for(let i=0; i<10000; i++){
    writeFileSync('./content/big.txt',`Hello Big File ${i}\n`, {flag:'a'})
}