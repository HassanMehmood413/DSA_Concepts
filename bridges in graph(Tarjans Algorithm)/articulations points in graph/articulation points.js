// It is similar to bridges in graph 
let V = 5; // Number of vertices
let adj = [
    [1, 2],  // Adjacency list of vertex 0
    [0, 2, 3], // Adjacency list of vertex 1
    [0, 1],   // Adjacency list of vertex 2
    [1, 4],   // Adjacency list of vertex 3
    [3]      // Adjacency list of vertex 4
];

let visit = new Array(V).fill(false)
let articulations = new Array(V).fill(false)
let parent = new Array(V).fill(-1)
let dict = new Array(V).fill(-1)
let low = new Array(V).fill(-1)
let time = [0]


var dfs = function (start, visit, parent, dict, low, time) {
    visit[start] = true
    let children = 0
    dict[start] = low[start] = time[0]++

    for (let neighbor of graph[start]) {
        if (!visit[neighbor]) {
            children++
            parent[neighbor] = start

            dfs(neighbor, visit, parent, dict, low, time)

            low[start] = Math.min(low[neighbor], low[start])

            if (parent[start] !== -1 && low[neighbor] >= dict[start]) {
                articulations[start] = true
            }
            if (parent[start] == -1 && children > 1) {
                articulations[start] = true
            }
        }
        else if (neighbor != parent[start]) {
            low[start] = Math.min(low[start], dict[neighbor])
        }
    }
}




for (let i = 0; i < V; i++) {
    if (!visit[i]) {
        dfs(i, visit, parent, dict, low, time)
    }
}
let arr = []

for (let i = 0; i < V; i++) {
    if (articulations[i] == true) {
        arr.push(i)
    }
}