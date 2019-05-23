var gridManager = require('./gridManager');
var output = require('./output');
const readline = require('readline');
const chalk = require('chalk');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

function main() {
    output.initializeOutput();

    var grid = null;
    var score = 0;

    process.stdin.on('keypress', (str, key) => {
        if (key.name.toLowerCase() === 'q') {
            process.exit();
        } else if (key.name.toLowerCase() === 'n') {
            console.clear();
            output.initializeOutput();
            [grid, score] = gridManager.makeEmptyGrid();
            var [r1, c1] = gridManager.getRandomEmptyPositionFromGrid(grid)
            grid[r1][c1] = 2;
            var [r2, c2] = gridManager.getRandomEmptyPositionFromGrid(grid)
            grid[r2][c2] = 2;
            output.displayGrid(grid, score);
        } else if (key.name.toLowerCase() === 'up') {
            console.clear();
            output.initializeOutput();

            for (var row in grid) {
                var columnArr = []
                for (var column in grid[row]) {
                    if (grid[column][row] != '_') {
                        columnArr.push(grid[column][row])
                    }
                }
                console.log(columnArr)
                if (columnArr.length >= 2) {
                    console.log('ccccccccccccccc')
                    for (var i = columnArr.length; i > 0; i--) {
                        if (columnArr[i - 1] == columnArr[i - 2]) {
                            console.log('ddddddddddddd')
                            columnArr[i - 2] = columnArr[i - 2] + columnArr[i - 1]
                            score += columnArr[i - 2]
                            columnArr.pop()
                            i--;
                        }
                    }
                }

                for (var i = columnArr.length; i < grid.length; i++) {
                    columnArr.push('_')
                }
                for (var column in grid[row]) {
                    grid[column][row] = columnArr[column]
                }
                console.log(columnArr)
                console.log('aaaaaaaaaaaaaaaaa')
            }


            var [isExit, msg] = gridManager.checkExitCondition(grid, score);
            if (isExit) {
                console.log(chalk.green(msg))
                console.log(chalk.green("Press N to start again"))
            } else {
                var [r1, c1] = gridManager.getRandomEmptyPositionFromGrid(grid)
                grid[r1][c1] = gridManager.getRandom2or4();
                output.displayGrid(grid, score);
            }
        } else if (key.name.toLowerCase() === 'left') {
            console.clear();
            output.initializeOutput();
            [grid, score] = gridManager.makeEmptyGrid();
            output.displayGrid(grid, score);
        } else if (key.name.toLowerCase() === 'right') {
            console.clear();
            output.initializeOutput();
            [grid, score] = gridManager.makeEmptyGrid();
            output.displayGrid(grid, score);
        } else if (key.name.toLowerCase() === 'down') {
            console.clear();
            output.initializeOutput();

            for (var row in grid) {
                var columnArr = []
                for (var column in grid[row]) {
                    if (grid[column][row] != '_') {
                        columnArr.push(grid[column][row])
                    }
                }
                console.log(columnArr)
                if (columnArr.length >= 2) {
                    console.log('ccccccccccccccc')
                    for (var i = columnArr.length; i > 0; i--) {
                        if (columnArr[i - 1] == columnArr[i - 2]) {
                            console.log('ddddddddddddd')
                            columnArr[i - 2] = columnArr[i - 2] + columnArr[i - 1]
                            score += columnArr[i - 2]
                            columnArr.pop()
                            i--;
                        }
                    }
                }

                for (var i = columnArr.length; i < grid.length; i++) {
                    columnArr.push('_')
                }
                for (var column in grid[row]) {
                    grid[column][row] = columnArr[column]
                }
                console.log(columnArr)
                console.log('aaaaaaaaaaaaaaaaa')
            }


            var [isExit, msg] = gridManager.checkExitCondition(grid, score);
            if (isExit) {
                console.log(chalk.green(msg))
                console.log(chalk.green("Press N to start again"))
            } else {
                var [r1, c1] = gridManager.getRandomEmptyPositionFromGrid(grid)
                grid[r1][c1] = gridManager.getRandom2or4();
                output.displayGrid(grid, score);
            }
        }
    });
}

main()