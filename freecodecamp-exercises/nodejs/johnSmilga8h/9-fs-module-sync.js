const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')

//console.log(first,second);

//create file
//if file is there, we will overwrite it with the values we send.
writeFileSync('./content/result-sync.txt','Youre in result.txt now',{flag:'a'}) // {flag:'a'} adds the value to the end of file.
