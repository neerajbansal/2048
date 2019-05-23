/**
 * Author: Neeraj Bansal
 * Email: bansal.neeraj94@gmail.com
 * Desc: This module manages handles all ouput related tasks of the game
 */

const chalk = require('chalk');
const center = require('center-align');

//Initilaize Welcome Screen
function welcomeAndControlsScreen() {
    console.clear();
    console.log(chalk.blue("Welcome to 2048 Console Game!"));
    console.log(chalk.blue("DEVELOPER: NEERAJ BANSAL"));
    console.log(chalk.blue("-----------------------------"));
    console.log();
    console.log(chalk.red("Rules are as follows:"));
    console.log(chalk.red("CONTROLS: ARROW KEYS"));
    console.log(chalk.red("Play GAME: P"));
    console.log(chalk.red("NEW GAME: N"));
    console.log(chalk.red("EXIT GAME: Q"));
    console.log();
    console.log(chalk.blue("*************GAME************"));
}

//This function called after every move to refresh diplay and render with new provide state "grid & score"
function displayGrid(grid, score) {
    for (var row in grid) {
        for (var column in grid[row]) {
            var value = String(grid[row][column]);
            process.stdout.write(center(value, 10));
        }
        process.stdout.write('\n');
    }
    console.log();
    console.log(chalk.yellow("SCORE:", score));
}


exports.welcomeAndControlsScreen = welcomeAndControlsScreen;
exports.displayGrid = displayGrid;