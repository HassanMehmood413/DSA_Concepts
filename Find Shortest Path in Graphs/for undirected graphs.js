
var bfs = function (edges, visit, parent, start) {
    let queue = [start]
    visit[start] = true
    while (queue.length > 0) {
        let first = queue.shift()
        for (let neighbor of edges[first]) {
            if (!visit[neighbor]) {
                queue.push(neighbor)
                parent[neighbor] = first
                visit[neighbor] = true
            }
        }
    }
}
let edges = [
    [1, 2],       // Vertex 0 is connected to 1 and 2
    [0, 3, 4],    // Vertex 1 is connected to 0, 3, and 4
    [0, 5, 6],    // Vertex 2 is connected to 0, 5, and 6
    [1],          // Vertex 3 is connected to 1
    [1],          // Vertex 4 is connected to 1
    [2],          // Vertex 5 is connected to 2
    [2, 7],       // Vertex 6 is connected to 2 and 7
    [6]           // Vertex 7 is connected to 6
];
let s = 1
let d = 7
let visit = new Array(d+1).fill(false)
let parent = new Array(d+1).fill(-1)
parent[s] = -1
bfs(edges, visit, parent, s)

let arr = []
let currnode = d
arr.push(currnode)
while(currnode != s){
    currnode = parent[currnode]
    arr.push(currnode)
}
console.log(arr.reverse())