let graph = new Map()
var again = function (graph, node1, node2) {
    if (!graph.has(node1)) {
        graph.set(node1, [])
    }
    if (!graph.has(node2)) {
        graph.set(node2, [])
    }
    graph.get(node1).push(node2)
    graph.get(node2).push(node1)
}
const edges = [
    ['A', 'B'],
    ['A', 'C'],
    ['B', 'D'],
    ['E', 'F'], // Disconnected component start from here
    ['F', 'G']
];
for (let i = 0; i < edges.length; i++) {
    again(graph, edges[i][0], edges[i][1])
}


// So we have done making adjacent list using Map()

// Step 2:
// Now we make two funcitons, one for dfs and one for connecting Disconnected nodes


var dfs = function (graph, starting, visit, arr) {
    arr.push(starting)
    visit.add(starting)
    for (let neighbor of graph.get(starting)) {
        console.log(neighbor)
        if (!visit.has(neighbor)) {
            dfs(graph, neighbor, visit)
        }
    }
}

// function for connectings Disconnected nodes 
var Disconnected = function (graph) {
    let arr = []
    let visit = new Set()
    for (let node of graph.keys(visit)) {
        console.log(node, graph.keys(visit))
        if (!visit.has(node)) {
            dfs(graph, node, visit, arr)
        }
    }
    return result
}

Disconnected(graph)