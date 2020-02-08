const fs = require("fs")

fs.readFile("names.txt", fileRead)

function fileRead(error, data) {
    const names = data.toString().split("\r\n")
    
    if (names.includes(process.argv[2])) {
        console.log("Yes. They are on the list.")
    } else {
        console.log("No. They are not allowed access.")
    }
}