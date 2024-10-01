//we commonly used bfs to find cycle in directed graphs so dfs is not mostly used
// output is: ["A", "C", "B", "D", "E"]
//For simple topological sort , to store values of nodes we have to use stack and then reverse it in the end



// Link:
https://www.geeksforgeeks.org/problems/topological-sort/1?page=1&category=Graph&sortBy=submissions

let graph = new Map()

var again = function (graph, node1, to) {
    if (!graph.has(node1)) {
        graph.set(node1, [])
    }
    graph.get(node1).push(to)
}
const edges = [
    ['A', 'B'], // A -> B
    ['A', 'C'], // A -> C
    ['B', 'D'], // B -> D
    ['C', 'D'], // C -> D
    ['D', 'E']  // D -> E
];

for (let i = 0; i < edges.length; i++) {
    again(graph, edges[i][0], edges[i][1])
}


// function to perform bfs 
var bfs = function (graph, node, visit, arr) {
    visit.add(node)
    for (let neighbor of graph.get(node)) {
        if (!visit.has(neighbor)) {
            bfs(graph, neighbor, visit, arr)
        }
    }
    stack.push(node)
}


var not = function (graph) {
    let visit = new Set()
    let stack = []
    for (let node of graph.keys()) {
        if (!visit.has(node)) {
            bfs(graph, node, visit, arr)
        }
    }
    stack.reverse()

}
not(graph)

