// This algorithm is used to find the shortest path between nodes 

// It can handle both directed and undirected graph but enshure that these graphs have weights on their edges if not then it is not applicable

// almost similar to prims algrorithm

V = 3, E = 3
edges = [
    [0, 1, 1], // Edge from vertex 0 to vertex 1 with weight 1
    [0, 2, 6], // Edge from vertex 0 to vertex 2 with weight 6
    [1, 2, 3], // Edge from vertex 1 to vertex 2 with weight 3
    [1, 0, 1], // Edge from vertex 1 to vertex 0 with weight 1
    [2, 1, 3], // Edge from vertex 2 to vertex 1 with weight 3
    [2, 0, 6]  // Edge from vertex 2 to vertex 0 with weight 6
]
let graph = []
for (let i = 0; i < V; i++) {
    graph[i] = []
}
for (let [u, v, w] of edges) {
    graph[u].push([v, w])
    graph[v].push([u, w])
}

var dijkstra = function (graph, start) {

    let dict = new Array(V).fill(Infinity)
    let visit = new Array(V).fill(false)
    dict[start] = 0

    for (let i = 0; i < V - 1; i++) {
        minindex = minkey(visit, dict, V)

        if (minindex == -1) {
            break
        }

        visit[minindex] = true

        for (let [neighbor, weight] of graph[minindex]) {
            if (!visit[neighbor] && dict[minindex] + weight < dict[neighbor]) {
                dict[neighbor] = dict[minindex] + weight
            }
        }

    }
    return dict
}
var minkey = function (visit, dict, V) {
    let minindex = -1
    let minvalue = Infinity
    for (let j = 0; j < V; j++) {
        if (!visit[j] && dict[j] < minvalue) {
            minindex = j
            minvalue = dict[j]
        }
    }
    return minindex
}
let s = dijkstra(graph, 0)
console.log(s)




// Using Set for better understanding but its complexity is not good with respect to upper one without set 
// using arrays : 0(V2)
// using set : 0(V2 log V)
// using priority queue : 0(V+E)logV


let V = 3, E = 3
let edges = [
    [0, 1, 1], // Edge from vertex 0 to vertex 1 with weight 1
    [0, 2, 6], // Edge from vertex 0 to vertex 2 with weight 6
    [1, 2, 3], // Edge from vertex 1 to vertex 2 with weight 3
    [1, 0, 1], // Edge from vertex 1 to vertex 0 with weight 1
    [2, 1, 3], // Edge from vertex 2 to vertex 1 with weight 3
    [2, 0, 6]  // Edge from vertex 2 to vertex 0 with weight 6
]
let graph = []
for (let i = 0; i < V; i++) {
    graph[i] = []
}
for (let [u, v, w] of edges) {
    graph[u].push([v, w])
    graph[v].push([u, w])
}

var byset = function (graph, start) {
    let dict = new Array(V).fill(Infinity)
    let pair = []
    let visit = new Array(V).fill(false)
    dict[start] = 0
    pair.push([start, 0])
    while (pair.length > 0) {
        pair.sort((a, b) => a[1] - b[1]); // Sort by distance

        let [first, currentdist] = pair.shift()
        if (visit[first]) continue
        visit[first] = true
        for (let [neighbor, weight] of graph[first]) {
            let distance = weight + currentdist

            if (distance < dict[neighbor]) {
                dict[neighbor] = distance
                pair.push([neighbor, distance])
            }
        }
    }
    return dict
}
let s = byset(graph, 0)
console.log(s)