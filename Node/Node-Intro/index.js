// const fs = require("fs")
// fs.copyFileSync("file1.txt","file2.txt")        // if the destination file doesn't exist it will create a file instead

// external modules using npm
const superhero = require("superheroes")

console.log(superhero.random())

const supervillains = require("supervillains")

console.log(supervillains.all.length,supervillains.random());

