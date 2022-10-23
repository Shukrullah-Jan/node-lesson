

const { readFile, readFileSync } = require("fs")

const data = readFileSync("./other files/names.txt", "utf8")
console.log(data)
readFile("./files.txt", "utf8", (err, data) => {

    if (err) {
        console.log(err)
        return;
    }
    console.log(data)
})