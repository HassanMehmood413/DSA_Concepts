// First in kahns algo , we have to create a list that contains all the pointers of the nodes.
// Then also create a list to store indegrees of all nodes
//when the indegree of any node is 0 , push it in the queue/or resultant array



let V = 6;
let edges = [
    [5, 2],
    [5, 0],
    [4, 0],
    [4, 1],
    [2, 3],
    [3, 1]
];
let indegree = new Array(V).fill(0)
let graph = new Map()
var again = function (graph, node1, to) {
    if (!graph.has(node1)) {
        graph.set(node1, [])
    }
    graph.get(node1).push(to)
    indegree[to]++
}
console.log(indegree)

for (let i = 0; i < edges.length; i++) {
    again(graph, edges[i][0], edges[i][1])
}


// push those who have indegree 0 in queue 
let queue = []
for (let i = 0; i < V; i++) {
    if (indegree[i] == 0) {
        queue.push(i)
    }
}


let res = []
while (queue.length > 0) {
    let first = queue.shift()
    res.push(first)
    for (let neighbor of graph.get(first) || []) {
        indegree[neighbor]--
        console.log(neighbor)
        if (indegree[neighbor] == 0) {
            queue.push(neighbor)
        }
    }
}
if (res.length != V) {
    console.log('Cycle Contains')
}
else {
    console.log(res)
}


