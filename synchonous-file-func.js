
// Destructuring 
const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./text-files/first.txt", "utf8");
console.log(first);

writeFileSync("./text-files/result.txt", `This is the written file: ${first}`);
