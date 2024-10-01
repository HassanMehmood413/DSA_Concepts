//we commonly used bfs to find cycle in directed graphs so dfs is not mostly used


// !important : 

// To check cycle in directed graphs , we use stack for bfs and indegree for dfs also we dont use parent comparison like we use in unidirected graph cycles

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



var bfs = function (graph, node, visit, stack) {
    visit.add(node)
    stack.add(node)
    for (let neighbor of graph.get(node)) {
        if (!visit.has(neighbor)) {
            if (bfs(graph, neighbor, visit, stack)) {
                return true
            }
        }
        else if (stack.has(neighbor)) {
            return true
        }
    }
    stack.delete(node)
    return false


}


var cycle = function (graph) {
    let visit = new Set()
    let stack = new Set()
    for (let node of graph.keys()) {
        if (!visit.has(node)) {
            if (bfs(graph, node, visit, stack)) {
                return true
            }
        }
    }
    return false
}
cycle(graph)