// This algorithm is used to find the strongly connected components in the graph.
// Now the strongly connected components means when you traverse from start and again reaches to start its mean it is a strongly connected component
let V = 5; // Number of vertices

// Adjacency list representation of the graph
let adj = [
    [1],        // Adjacency list of vertex 0
    [2],        // Adjacency list of vertex 1
    [0, 3],     // Adjacency list of vertex 2
    [4],        // Adjacency list of vertex 3
    []          // Adjacency list of vertex 4
];


var topo = function (adj, visit, start, stack) {
    visit[start] = true
    for (let neighbor of adj[start]) {
        if (!visit[neighbor]) {
            topo(adj, visit, neighbor, stack)
        }
    }
    stack.push(start)
}

var transposegraph = function (V, adj) {
    let transpose = new Array(V).fill(null).map(() => [])

    for (let i = 0; i < V; i++) {
        for (let neighbor of adj[i]) {
            transpose[neighbor].push(i)
        }
    }
    return transpose
}

var dfs = function (first, visit, transpose, arr) {
    visit[first] = true
    arr.push(first)
    for (let neighbor of transpose[first]) {
        if (!visit[neighbor]) {
            dfs(neighbor, visit, transpose, arr)
        }
    }

}
var k = function (V, adj) {

    let visit = new Array(V).fill(false)
    let stack = []
    let res = []
    let transpose = transposegraph(V, adj)
    for (let i = 0; i < V; i++) {
        if (!visit[i]) {
            topo(adj, visit, i, stack)
        }
    }
    visit.fill(false)


    while (stack.length > 0) {
        let first = stack.pop()
        if (!visit[first]) {
            let arr = []
            dfs(first, visit, transpose, arr)
            res.push(arr)
        }
    }

    return res
}
let s = k(A, adj)
console.log(s)