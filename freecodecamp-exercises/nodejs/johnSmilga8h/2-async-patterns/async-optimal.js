const fs = require("fs").promises;
// const util = require('util')
// const readFilePromise = util.promisify(fs.readFile)
// const writeFilePromise = util.promisify(fs.writeFile)


const start = async () => {
  try {
    const first = await fs.readFile("./content/first.txt",'utf-8');
    const second = await fs.readFile("./content/second.txt",'utf-8');
    await fs.writeFile('./content/result-mind-grenade.txt',`AWESOME : ${first} ${second}`,{flag:'a'})
    console.log(first,second);
  } catch (error) {
      console.log(error);
  }
};

start()

/* getText('./content/first.txt')
.then(result=> console.log(result))
.catch((err)=>console.log(err)) */

/* const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile("./content/first.txt", "utf-8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
 */
