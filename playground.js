const fs = require("fs");

console.log("hello world ");
console.log("hello world 2");

// const note = fs.readFileSync("./note.js", "utf-8");
// console.log(note);

fs.readFile("./note.js", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

console.log("hello world 3");
console.log("hello world 4");
