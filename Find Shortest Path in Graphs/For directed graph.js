// step 1: made adj list
// step 2: make an array by preforming topological sort
// step 3: make a distance array fill with infinity , then use the array that you made using topological sort.
// step 4: if(weight of node )


// step 1:
let V = 6;  // Number of vertices
let edges = [
    [0, 1, 5],   // Edge from node 0 to node 1 with weight 5
    [0, 2, 3],   // Edge from node 0 to node 2 with weight 3
    [1, 3, 6],   // Edge from node 1 to node 3 with weight 6
    [1, 2, 2],   // Edge from node 1 to node 2 with weight 2
    [2, 3, 7],   // Edge from node 2 to node 3 with weight 7
    [2, 4, 4],   // Edge from node 2 to node 4 with weight 4
    [2, 5, 2],   // Edge from node 2 to node 5 with weight 2
    [3, 4, -1],  // Edge from node 3 to node 4 with weight -1
    [3, 5, 1],   // Edge from node 3 to node 5 with weight 1
    [4, 5, -2]   // Edge from node 4 to node 5 with weight -2
];
let graph = new Array(V).fill(null).map(() => [])
for (let [u, v, w] of edges) {
    graph[u].push(v, w)
}
console.log(graph)


// output : 
// graph =
//     [[[1, 5], [2, 3]],
//     [[3, 6], [2, 2]],
//     [[3, 7], [4, 4], [5, 2]],
//     [[4, -1], [5, 1]],
//     [[5, -2]],
//     []
//     ]

// step 2:
let visit = new Array(V).fill(false)
let stack = []
var topo = function (graph, visit, start, stack) {
    visit[start] = true
    for (let neighbor of graph[start] || []) {
        if (!visit[neighbor]) {
            topo(graph, visit, neighbor, stack)
        }
    }
    stack.push(start)

}


for (let i = 0; i < V; i++) {
    if (!visit[i]) {
        topo(graph, visit, i, stack)
    }
}
// console.log(stack.reverse())


// step 3 :
let dict = new Array(V).fill(Infinity)
dict[0] = 0

while (stack.length != 0) {
    let a = stack.pop()
    if (dict[a] != Infinity) {
        for (let neighbor of graph[a]) {
            let v = neighbor[0]
            let weight = neighbor[1]
            if (dict[a] + weight < dict[v]) {
                dict[v] = dict[a] + weight
            }
        }

    }
}
console.log(dict)

