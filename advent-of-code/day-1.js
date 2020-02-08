const fs = require("fs")

function calculateFuel(mass) {
    let fuel = Math.floor(mass / 3) - 2
    return fuel
}

fs.readFile("day-1-input.txt", "utf-8", fileHasBeenRead)
                     
function fileHasBeenRead(error, data) {
    let numbers = data.split("\r\n")
    
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        
        let fuelCalculated = numbers[i]
        while (fuelCalculated > 0) {
            fuelCalculated = calculateFuel(fuelCalculated)
            if (fuelCalculated > 0) {
                total += fuelCalculated
            }
        }
    }
    console.log(total)
}
