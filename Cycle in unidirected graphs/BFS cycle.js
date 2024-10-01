// Important note: 

    // to check cycle only in unidirected graphs we check if neighbor node is present is visit set and is not equal to parent node then there is a cycle 

let graph = new Map()
var again = function (graph, node1, node2) {
    if (!graph.get(node1)) {
        graph.set(node1, [])
    }
    if (!graph.get(node2)) {
        graph.set(node2, [])
    }

    graph.get(node1).push(node2)
    graph.get(node2).push(node1)
}

const edges = [
    ['A', 'B'],
    ['B', 'C'],
    ['C', 'A']
];
for (let i = 0; i < edges.length; i++) {
    again(graph, edges[i][0], edges[i][1])
}
console.log(graph)

// Now we have to make a dfs function and also a function for disconnected graph

var bfs = function (graph, start, visit) {
    let queue = [{ node: start, parent: null }]
    visit.add(start)
    while (queue.length > 0) {
        let { node, parent } = queue.shift()
        for (let neighbor of graph.get(node)) {
            if (!visit.has(neighbor)) {
                visit.add(neighbor)
                queue.push({ node: neighbor, parent: node })
            }
            else if (neighbor != parent) return true
        }
    }
    return false
}



var disconnected = function (graph) {
    let visit = new Set()
    for (let node of graph.keys()) {
        if (!visit.has(node)) {
            if (bfs(graph, node, visit)) {
                return true
            }
        }
    }
    return false
}