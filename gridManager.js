/**
 * Author: Neeraj Bansal
 * Email: bansal.neeraj94@gmail.com
 * Desc: This module manages state of grid and provide util functions for grid management
 */

//Default grid size is 4 which can be extensive to any degree (max 10 here to make it playble)
function makeEmptyGrid(size = 4) {
    if (size <= 2) {
        //Not intuitive to play less than this board
        console.log("Size must be greater than 2 !")
        return
    } else if (size > 10) {
        console.log("Size must be less than 10 !")
        return
    }
    const grid = new Array(size).fill('_').map(() => new Array(size).fill("_"));
    return [grid, 0]
}

function getRandomEmptyPositionFromGrid(grid) {
    var arrayWithEmptyPositions = [];
    for (var row in grid) {
        for (var column in grid[row]) {
            if (grid[row][column] == '_') {
                arrayWithEmptyPositions.push([row, column])
            }
        }
    }
    var randomEmptyPositions = arrayWithEmptyPositions[Math.round((Math.random() * 1000)) % arrayWithEmptyPositions.length];
    return randomEmptyPositions;
}

//Randomly get 2 or 4 to fill in grid at random place after every move.
function getRandomNumToFill() {
    var randomNumArr = [2, 4] //We can add any number here like 8 or 16
    var randomNum = randomNumArr[Math.round((Math.random() * 1000)) % randomNumArr.length];
    return randomNum;
}

//Exit condition on number or tiles not available
function checkExitCondition(grid, score) {
    if (score >= 2048) {
        return [true, "Yippee! you reached best score"]
    }
    for (var row in grid) {
        for (var column in grid[row]) {
            if (grid[row][column] == '_') {
                return [false, ""];
            }
        }
    }
    return [true, "No more tiles left"];
}

exports.makeEmptyGrid = makeEmptyGrid
exports.getRandomEmptyPositionFromGrid = getRandomEmptyPositionFromGrid
exports.getRandomNumToFill = getRandomNumToFill
exports.checkExitCondition = checkExitCondition