const blessed = require("blessed");

const program = blessed.program()

let snowflakes = []

function draw() {
    // Create a new JavaScript Object, with a row and column
    // Add it to the array of snowflakes
    snowflakes.push({
        row: 0,
        column: Math.floor(Math.random() * program.cols),
    })

    program.clear()
    
    // Loop through all snowflakes, draw each one and make them fall
    snowflakes.forEach(function(snowflake) {
        program.move(snowflake.column, snowflake.row)
        program.write("*")

        if (snowflake.row < program.rows - 1) {
            snowflake.row++
        }
    })

    
}

setInterval(draw, 500)