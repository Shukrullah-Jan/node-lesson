
const fs = require("fs")
const { writeFile, writeFileSync } = require("fs")

writeFile("./createdFile.txt", "this text is from created file\n", { flag: "a" }, () => {
    console.log("File created Successfully")
})

// fs.open ("ff.txt", "r", (err, data)=> {

//     if (err) console.log("file does not exist")
// })
writeFileSync("./createdFile2.bin", "this is another created text\n", { flag: "a" })