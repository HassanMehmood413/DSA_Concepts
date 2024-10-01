let graph = new Map()
var visit = function (graph, node1, node2) {
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
    visit(graph, edges[i][0], edges[i][1])
}
console.log(graph)

// preforming dfs 
var bfs = function (graph, startnode, visit) {
    let queue = [startnode]
    visit.add(startnode)
    while (queue.length > 0) {
        let first = queue.shift()
        for (const neighbor of graph.get(first)) {
            if (!visit.has(neighbor)) {
                visit.add(neighbor)
                queue.push(neighbor)
            }
        }

    }
}

var Disconnected = function (graph) {
    // performing dfs on this tree 
    const visit = new Set()
    for (let node of graph.keys(visit)) {
        console.log(node, graph.keys(visit))
        if (!visit.has(node)) {
            bfs(graph, node, visit)
        }
    }
}
Disconnected(graph)




// Output: 
Map {
    'A' => ['B', 'C'],
        'B' => ['A', 'D'],
            'C' => ['A'],
                'D' => ['B'],
                    'E' => ['F'],
                        'F' => ['E', 'G'],
                            'G' => ['F']
}

// in Disconnected function when we visit every node of graph 
  A MapIterator { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }
  B MapIterator { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }
  C MapIterator { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }
  D MapIterator { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }
  E MapIterator { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }
  F MapIterator { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }
  G MapIterator { 'A', 'B', 'C', 'D', 'E', 'F', 'G' }