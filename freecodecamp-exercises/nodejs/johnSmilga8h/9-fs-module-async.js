const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = res;
  readFile("./content/second.txt", "utf-8", (err, res) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = res;
    writeFile(
      "./content/result-async.txt",
      "Async Result text file",
      (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task");
      }
    );
  });
});
console.log("Starting next task");
