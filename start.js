/**
 * Author: Neeraj Bansal
 * Email: bansal.neeraj94@gmail.com
 * Desc: This is the starting point of the game with all keys (movement) logic.
 */

const gridManager = require('./gridManager');
const displayManager = require('./displayManager');
const readline = require('readline');

function main() {
    //Bind process with input read
    readline.emitKeypressEvents(process.stdin);
    process.stdin.setRawMode(true);

    //Welcome screen
    displayManager.welcomeAndControlsScreen();

    var gridSize = 4; //Just change this number to make grid of any size (min-2 & max- 10 so that game is playable on normal system)
    var grid = null;
    var score = 0;

    process.stdin.on('keypress', (str, key) => {
        if (key.name.toLowerCase() === 'q') {
            process.exit();

        } else if (key.name.toLowerCase() === 'n' || key.name.toLowerCase() === 'p') {
            displayManager.welcomeAndControlsScreen();

            //Below code fill any two empty random places with random number to start a game.
            [grid, score] = gridManager.makeEmptyGrid(gridSize);
            var [r1, c1] = gridManager.getRandomEmptyPositionFromGrid(grid)
            grid[r1][c1] = gridManager.getRandomNumToFill();
            var [r2, c2] = gridManager.getRandomEmptyPositionFromGrid(grid)
            grid[r2][c2] = gridManager.getRandomNumToFill();

            displayManager.displayGrid(grid, score);


        } else if (key.name.toLowerCase() === 'up') { //Logic for up button
            displayManager.welcomeAndControlsScreen();

            //Below code describes up button logic that how numbers should be merged
            for (var row in grid) {
                var columnArr = [];
                for (var column in grid[row]) {
                    if (grid[column][row] != '_') {
                        columnArr.push(grid[column][row]);
                    }
                }
                if (columnArr.length >= 2) {
                    for (var i = columnArr.length; i > 0; i--) {
                        if (columnArr[i - 1] == columnArr[i - 2]) {
                            columnArr[i - 2] = columnArr[i - 2] + columnArr[i - 1];
                            score += columnArr[i - 2];
                            columnArr.pop();
                            i--;
                        }
                    }
                }

                for (var i = columnArr.length; i < grid.length; i++) {
                    columnArr.push('_');
                }
                for (var column in grid[row]) {
                    grid[column][row] = columnArr[column];
                }
            }

            gridManager.exitOrNextStep(grid, score);

        } else if (key.name.toLowerCase() === 'left') {
            displayManager.welcomeAndControlsScreen();

            for (var row in grid) {
                var columnArr = [];
                for (var column in grid[row]) {
                    if (grid[row][column] != '_') {
                        columnArr.push(grid[row][column]);
                    }
                }
                if (columnArr.length >= 2) {
                    for (var i = columnArr.length; i > 0; i--) {
                        if (columnArr[i - 1] == columnArr[i - 2]) {
                            columnArr[i - 2] = columnArr[i - 2] + columnArr[i - 1];
                            score += columnArr[i - 2];
                            columnArr.pop();
                            i--;
                        }
                    }
                }

                for (var i = columnArr.length; i < grid.length; i++) {
                    columnArr.push('_');
                }
                for (var column in grid[row]) {
                    grid[row][column] = columnArr[column];
                }
            }

            gridManager.exitOrNextStep(grid, score);

        } else if (key.name.toLowerCase() === 'right') {
            displayManager.welcomeAndControlsScreen();

            for (var row in grid) {
                var columnArr = [];
                for (var column in grid[row]) {
                    if (grid[row][column] != '_') {
                        columnArr.push(grid[row][column]);
                    }
                }
                if (columnArr.length >= 2) {
                    for (var i = 0; i < columnArr.length; i++) {
                        if (columnArr[i] == columnArr[i + 1]) {
                            columnArr[i + 1] = columnArr[i] + columnArr[i + 1];
                            score += columnArr[i + 1];
                            columnArr.shift();
                            i++;
                        }
                    }
                }

                for (var i = columnArr.length; i < grid.length; i++) {
                    columnArr.unshift('_');
                }
                for (var column in grid[row]) {
                    grid[row][column] = columnArr[column];
                }
            }

            gridManager.exitOrNextStep(grid, score);
        } else if (key.name.toLowerCase() === 'down') {
            displayManager.welcomeAndControlsScreen();

            for (var row in grid) {
                var columnArr = [];
                for (var column in grid[row]) {
                    if (grid[column][row] != '_') {
                        columnArr.push(grid[column][row]);
                    }
                }
                if (columnArr.length >= 2) {
                    for (var i = 0; i < columnArr.length; i++) {
                        if (columnArr[i] == columnArr[i + 1]) {
                            columnArr[i + 1] = columnArr[i] + columnArr[i + 1];
                            score += columnArr[i + 1];
                            columnArr.shift();
                            i++;
                        }
                    }
                }

                for (var i = columnArr.length; i < grid.length; i++) {
                    columnArr.unshift('_');
                }
                for (var column in grid[row]) {
                    grid[column][row] = columnArr[column];
                }
            }

            gridManager.exitOrNextStep(grid, score);
        }
    });
}

main();