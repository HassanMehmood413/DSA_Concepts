let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
var island = function (grid) {

    let bfs = function (r, c) {
        let x = 0
        let y = 0
        let queue = [[r, c]]
        grid[r][c] = "0"
        while (queue.length > 0) {
            let [row, column] = queue.shift()
            visit.add(`${row},${column}`)
            for (let [l, r] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                x = row + l
                y = column + r
                if (x >= 0 && y >= 0 && x < rows && y < cols && grid[x][y] == "1") {
                    grid[x][y] = "0"
                    queue.push([x, y])
                }
            }
        }
    }
    let rows = grid.length
    let number = 0
    let visit = new Set()
    let cols = grid[0].length
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == "1" && !visit.has(`${i},${j}`)) {
                number++
                bfs(i, j)
            }
        }
    }
    console.log(number)
}
island(grid)