// The following prims algorithm is for undirected graphs and is basically used to find the minimum spanning tree.

// Definition:
// Now The question is what is spanning tree , Spanning tree is basically a tree in which all the nodes are accessable by one another 
// and it uses less edges to connect nodes with each other.

// Minimum spanning tree:
// When we have alot of spanning tree, the one ST in which less edges are used to connect each nodes we called that tree a minimum spanning tree 



// Prims Algorithm: 
// 1) First make adj list
// 2) use three data structures (parent,mst,key)
// 3) parent store the parent of that Node, mst marks the node that is visited , key store the minimum weight of nodes.



// Problem Link: https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1?page=1&category=Graph&sortBy=submissions

// Problem Link 2 :https://leetcode.com/problems/min-cost-to-connect-all-points/description/











let graph = []
for (let i = 0; i < V; i++) {
    graph[i] = []
}
for (let [u, v, w] of edges) {
    graph[u].push([v, w])
    graph[v].push([u, w])
}


let parent = new Array(V).fill(-1)
let mst = new Array(V).fill(false)
let key = new Array(V).fill(Infinity)

key[0] = 0

for (let i = 0; i < V - 1; i++) {
    let u = minkey(key, mst, V)

    mst[u] = true

    for (let [neighbor, weight] of graph[u]) {
        if (!mst[neighbor] && weight < key[neighbor]) {
            key[neighbor] = weight
            parent[neighbor] = u
        }
    }
}



var minkey = function (key, mst, V) {
    let min = Infinity, index = -1
    for (let i = 0; i < V; i++) {
        if (!mst[i] && key[i] < min) {
            min = key[i]
            index = i
        }
    }
    return index
}
