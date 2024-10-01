
// This algorithm is used to find the bridges in the graph.
// Now the question is what is bridge , when you remove an edges between the nodes of the graph such that the graph is split
// into two or more components , then we can say the point where the split occurs is bridge



const vertices = 5;
const edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [1, 3],
    [3, 4]
];
let graph = []
var again = function (graph, node1, node2) {
    if (!graph[node1]) {
        graph[node1] = []
    }
    if (!graph[node2]) {
        graph[node2] = []
    }
    graph[node1].push(node2)
    graph[node2].push(node1)
}

for (let i = 0; i < edges.length; i++) {
    again(graph, edges[i][0], edges[i][1])
}


let visit = new Array(vertices).fill(false)
let parent = new Array(vertices).fill(-1)
let dict = new Array(vertices).fill(-1)
let low = new Array(vertices).fill(-1)
let time = [0]
let bridges = []


var bridgess = function (start, visit, parent, dict, low, time, bridges, graph) {
    visit[start] = true
    dict[start] = low[start] = time[0]++

    for (let neighbor of graph[start]) {
        if (!visit[neighbor]) {
            parent[neighbor] = start

            bridgess(neighbor, visit, parent, dict, low, time, bridges, graph)

            low[start] = Math.min(low[start], low[neighbor])

            if (low[neighbor] > dict[start]) {
                bridges.push([start, neighbor])
            }

        }
        else if (neighbor != parent[start]) {
            low[start] = Math.min(low[start], dict[neighbor])
        }
    }
}

for (let i = 0; i < vertices; i++) {
    if (!visit[i]) {
        bridgess(i, visit, parent, dict, low, time, bridges, graph)
    }
}
console.log(bridges)