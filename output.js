const chalk = require('chalk')

function initializeOutput() {
    console.log(chalk.blue("Welcome to 2048 Console Game!"));
    console.log(chalk.blue("DEVELOPER: NEERAJ BANSAL"));
    console.log(chalk.blue("-----------------------------"));
    console.log()
    console.log(chalk.red("Rules are as follows:"));
    console.log(chalk.red("CONTROLS: ARROW KEYS"));
    console.log(chalk.red("NEW GAME: N"));
    console.log(chalk.red("EXIT GAME: Q"));
    console.log()
    console.log(chalk.blue("*************GAME************"));
}

function displayGrid(grid, score) {
    // console.clear()
    for (var row in grid) {
        for (var column in grid[row]) {
            process.stdout.write(grid[row][column] + "     ")
        }
        process.stdout.write('\n');
    }
    console.log()
    console.log(chalk.yellow("SCORE:", score));
}

exports.initializeOutput = initializeOutput
exports.displayGrid = displayGrid