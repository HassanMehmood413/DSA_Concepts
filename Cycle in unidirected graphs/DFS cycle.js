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

var dfs = function (graph, start, parent, visit) {
    visit.add(start)
    for (const neighbor of graph.get(start)) {
        if (!visit.has(neighbor)) {
            if (dfs(graph, neighbor, start, visit)) return true
        }
        else if (neighbor != parent) {
            return true
        }
    }
    return false
}



var disconnected = function (graph) {
    let visit = new Set()
    for (let node of graph.keys()) {
        if (!visit.has(node)) {
            if (dfs(graph, node, null, visit)) {
                return true
            }
        }
    }
    return false
}
disconnected(graph)