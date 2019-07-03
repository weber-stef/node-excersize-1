const fs = require("fs")
const myReadableFile = "package.json"
let data = fs.readFileSync(myReadableFile, { encoding: "utf-8" });
data2 = JSON.parse(data)
const sizeOfNodeModules = fs.statSync("./node_modules").size;
numOfDevDeps = Object.keys(data2.devDependencies).length;
if (numOfDevDeps > 1) { dd = "DevDepencies" } else { dd = "DevDepency" }
console.log(data2);
console.log("The name of my project, as mentioned in my package.json is " + data2.name + ", it's version-number is " + data2.version + " and it has " + numOfDevDeps + " " + dd + " . The size of its node_modules-folder is " + sizeOfNodeModules + " bytes.")
// console.log(data);

console.log(sizeOfNodeModules);

