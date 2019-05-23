function makeEmptyGrid(size = 4) {
    if (size <= 2) {
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

function getRandom2or4() {
    var twoFour = [2, 4]
    var random2or4 = twoFour[Math.round((Math.random() * 1000)) % twoFour.length];
    return random2or4;
}

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
    return [true, "No More tiles left"];
}

exports.makeEmptyGrid = makeEmptyGrid
exports.getRandomEmptyPositionFromGrid = getRandomEmptyPositionFromGrid
exports.getRandom2or4 = getRandom2or4
exports.checkExitCondition = checkExitCondition