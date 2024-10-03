// let graph = new Map()
// var again = function (graph, node1, to) {
//     if (!graph.has(node1)) {
//         graph.set(node1, [])
//     }
//     graph.get(node1).push(to)
// }
// const edges = [
//     ['A', 'B'],
//     ['B', 'C'],
//     ["C", "D"],
//     ["D", "A"]
// ];
// for (let i = 0; i < edges.length; i++) {
//     again(graph, edges[i][0], edges[i][1])
// }

// var bfs = function (graph, visit, parent, start) {
//     let queue = [[start, parent]]
//     visit.add(start)
//     while (queue.length > 0) {
//         let [curr, p] = queue.shift()
//         for (let neighbor of graph.get(curr)) {
//             if (!visit.has(neighbor)) {
//                 visit.add(curr)
//                 queue.push([neighbor, curr])
//             }
//             else if (neighbor != parent) {
//                 return true
//             }
//         }
//     }
//     return false
// }



// var connected = function (graph) {
//     let visit = new Set()
//     for (let node of graph.keys()) {

//         if (!visit.has(node)) {
//             if (bfs(graph, visit, null, node)) return true
//         }

//     }
//     return false
// }



// Geeks for Geeks : BFS Traversal on connected graph 



// let adj = [
//     [1, 2, 3], // edges from vertex 0
//     [],        // edges from vertex 1
//     [4],       // edges from vertex 2
//     [],        // edges from vertex 3
//     []         // edges from vertex 4
// ];
// let graph = new Map()
// var again = function (graph, node1, to) {
//     if (!graph.has(node1)) {
//         graph.set(node1, [])
//     }
//     graph.get(node1).push(to)
// }

// for (let i = 0; i < adj.length; i++) {
//     for (let j of adj[i]) {
//         again(graph, i, j)
//     }
// }
// console.log(graph)



// var bfs = function (graph, start, visit, arr) {
//     let queue = [start]
//     visit.add(start)
//     while (queue.length > 0) {
//         let first = queue.shift()
//         arr.push(first)
//         for (let neighbor of graph.get(first)) {
//             if (!visit.has(neighbor)) {
//                 visit.add(neighbor)
//                 queue.push(neighbor)
//             }
//         }
//     }
// }

// var connect = function (graph) {
//     let visit = new Set()
//     let arr = []
//     for (let node of graph.keys()) {
//         if (!visit.has(node)) {
//             bfs(graph, node, visit, arr)
//         }
//     }
//     return arr.reverse()
// }
// connect(graph)

// var dfs = function (adj, visit, start, stack) {
//     visit.add(start)
//     stack.add(start)
//     for(let neighbor of adj[start]){
//         if(!visit.has(neighbor)){
//             if(dfs(adj,visit,neighbor,stack)){
//                 return true
//             }
//         }
//         else {
//             return true
//         }
//     }
//     stack.delete(start)
//     return false
// }





// let visit = new Set()
// let stack = new Set()
// for (let i = 0; i < V; i++) {
//     if (!visit.has(i)) {
//         if (dfs(adj, visit, i, stack)) {
//             return 1
//         }
//     }
// }
// return 0




// V = 5, E = 5
// adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]
// class Solution {
//     // Function to detect cycle in an undirected graph.
//     dfs(adj, visit, start, parent) {
//         visit[start] = true; // Mark the current node as visited
//         for (let neighbor of adj[start]) {
//             if (neighbor == parent) continue
//             if (!visit[neighbor]) { // If the neighbor hasn't been visited
//                 if (this.dfs(adj, visit, neighbor, start)) { // Recur for the neighbor
//                     return true; // Cycle detected
//                 }
//             } else if (neighbor !== parent) { // If visited and not the parent
//                 return true; // Cycle detected
//             }
//         }
//         return false; // No cycle detected
//     }

//     isCycle(V, adj) {
//         let visit = new Array(V).fill(false); // Initialize visited array
//         for (let i = 0; i < V; i++) { // Iterate over all vertices
//             if (!visit[i]) { // If the vertex hasn't been visited
//                 if (this.dfs(adj, visit, i, -1)) { // -1 is used for the parent of the first call
//                     return true
//                 }
//             }
//         }
//         return false
//     }
// }








// var bfs = function (edges, start, visit, parent) {
//     let queue = [start]
//     visit[start] = true
//     while (queue.length > 0) {
//         let first = queue.shift()
//         for (let neighbor of edges[first]) {
//             if (!visit.has(neighbor)) {
//                 visit[neighbor] = true
//                 parent[neighbor] = first
//                 queue.push(neighbor)
//             }
//         }
//     }

// }

// let s = 1
// let d = 8
// let edges = [
//     [1, 2],       // Vertex 0 is connected to 1 and 2
//     [0, 3, 4],    // Vertex 1 is connected to 0, 3, and 4
//     [0, 5, 6],    // Vertex 2 is connected to 0, 5, and 6
//     [1],          // Vertex 3 is connected to 1
//     [1],          // Vertex 4 is connected to 1
//     [2],          // Vertex 5 is connected to 2
//     [2, 7],       // Vertex 6 is connected to 2 and 7
//     [6]           // Vertex 7 is connected to 6
// ];



// let visit = new Array(8).fill(false)
// let parent = new Array(8).fill(0)
// parent[0] = -1

// let arr = []
// for (let i = 0; i < V; i++) {
//     if (!visit.has(i)) {
//         bfs(edjes, i, visit, parent)
//     }
// }
// // ans 
// let res = []
// let currnode = d
// res.push(currnode)
// while(currnode != s){
//     currnode = parent[currnode]
//     res.push(currnode)
// }
// console.log(res)





// var bfs = function (edges, visit, parent, start) {
//     let queue = [start]
//     visit[start] = true
//     while (queue.lenght > 0) {
//         let first = queue.shift()
//         for (let neighbor of edges[first]) {
//             if (!visit[neighbor]) {
//                 queue.push(neighbor)
//                 parent[neighbor] = first
//                 visit[neighbor] = true
//             }
//         }
//     }
// }
// let edges = [
//     [1, 2],       // Vertex 0 is connected to 1 and 2
//     [0, 3, 4],    // Vertex 1 is connected to 0, 3, and 4
//     [0, 5, 6],    // Vertex 2 is connected to 0, 5, and 6
//     [1],          // Vertex 3 is connected to 1
//     [1],          // Vertex 4 is connected to 1
//     [2],          // Vertex 5 is connected to 2
//     [2, 7],       // Vertex 6 is connected to 2 and 7
//     [6]           // Vertex 7 is connected to 6
// ];
// let s = 1
// let d = 8
// let visit = new Array(d).fill(false)
// let parent = new Array(d).fill(-1)
// parent[s] = -1
// bfs(edges, visit, parent, s)

// let arr = []
// let currnode = d
// arr.push(currnode)
// while(currnode != s){
//     currnode = parent[currnode]
//     arr.push(currnode)
// }
// console.log(res.reverse())







// var dfs = function (start, visit) {
//     visit[start] = true
//     let neighborindex = 0
//     for (let neighbor of isConnected[start]) {
//         if (neighbor == 1 && !visit[neighborindex]) {
//             dfs(neighborindex, visit)
//         }
//         neighborindex++
//     }
// }

// let isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
// let provience = 0
// let visit = new Array(isConnected.length).fill(false)
// for (let i = 0; i < isConnected.length; i++) {
//     if (!visit[i]) {
//         provience++
//         dfs(i, visit)
//     }
// }
// console.log(provience)


// V = 5, E = 5
// adj = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]]



// var bfs = function (adj, visit, start, parent) {
//     visit[start] = true
//     for(let neighbor of adj[start]){
//         if(!visit[neighbor]){
//             if(bfs(adj,visit,neighbor,start)){
//                 return true
//             }
//         }
//         else if(neighbor != parent){
//             return true
//         }
//     }
// }


// let visit = new Array(V).fill(false)
// for (let i = 0; i < adj.length; i++) {
//     if (!visit[i]) {
//         if(bfs(adj, visit, i, null)){
//             return true
//         }
//     }
// }
// return false


// nums = [9,12,5,10,14,3,10], pivot = 10
// let first = []
// let second = []
// let last = []
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] > pivot){
//         first.push(nums[i])
//     }
//     else if(nums[i] < pivot){
//         last.push(nums[i])
//     }
//     else{
//         second.push(nums[i])
//     }
// }
// return first + second + last





// n = 6, n = 7, edge = [[0, 1, 2], [0, 4, 1], [4, 5, 4], [4, 2, 2], [1, 2, 3], [2, 3, 6], [5, 3, 1]]
// let graph = new Array(n).fill(null).map(() => [])
// let stack = []
// for (let [u, v, w] of edge) {
//     graph[u].push([v, w])
// }

// // topo 
// var topo = function (graph, visit, start) {
//     visit[start] = true
//     for (let [neighbor, weight] of graph[start]) {
//         if (!visit[neighbor]) {
//             topo(graph, visit, neighbor)
//         }
//     }
//     stack.push(start)
// }


// let visit = new Array(n).fill(false)
// for (let i = 0; i < n; i++) {
//     if (!visit[i]) {
//         topo(graph, visit, i)
//     }
// }

// // dict 
// let dict = new Array(n).fill(Infinity)
// dict[0] = 0
// while (stack.length > 0) {
//     let first = stack.pop()
//     for (let [neighbor, weight] of graph[first]) {
//         if (dict[first] + weight < dict[neighbor]) {
//             dict[neighbor] = dict[first] + weight
//         }
//     }
// }
// return dict





// grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
// let fresh = 0
// let min = 0
// let x = 0
// let y = 0

// for (let r = 0; r < grid.length; r++) {
//     for (let c = 0; c < grid[0].length; c++) {
//         if (grid[r][c] == "2") {
//             queue.push(r, c)
//         }
//         else if (grid[r][c] == "1") {
//             fresh++
//         }
//     }
// }


// let queue = []
// grid[r][c] = "2"
// while (queue.length > 0 && fresh > 0) {
//     let length = queue.length
//     for (let i = 0; i < length; i++) {
//         let [rows, cols] = queue.shift()

//         for (let [row, col] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
//             x = row + rows
//             y = col + cols
//             if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == "1") {
//                 grid[x][y] = "2"
//                 fresh--
//                 queue.push([x, y])
//             }
//         }
//     }
//     min++
// }


// let grid = [
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
//     [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
// ]
// let x = 0
// let y = 0
// let max = 0
// var bfs = function (i, j) {
//     let queue = [[i, j]]
//     grid[i][j] = "0"
//     while (queue.length > 0) {
//         let [r, c] = queue.shift()
//         number = 1
//         for (let [rows, cols] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
//             x = rows + r
//             y = cols + c

//             if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == "1") {
//                 grid[x][y] = "0"
//                 number++
//                 queue.push([x, y])
//             }
//         }
//     }
// }


// for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] == "1") {
//             bfs(i, j)
//             max = Math.max(max, number)
//         }
//     }

// }

// let V = 6
// const adjList = {
//     0: [[1, 4], [2, 1]],
//     1: [[0, 4], [2, 2], [3, 5]],
//     2: [[0, 1], [1, 2], [3, 8], [4, 10]],
//     3: [[1, 5], [2, 8], [4, 2], [5, 6]],
//     4: [[2, 10], [3, 2], [5, 3]],
//     5: [[3, 6], [4, 3]]
// };

// let key = new Array(V).fill(Infinity)
// let parent = new Array(V).fill(-1)
// let mst = new Array(V).fill(false)

// key[0] = 0

// for (let i = 0; i < V; i++) {
//     let u = minkey(key, mst, V)

//     mst[u] = true

//     for (let [neighbor, weight] of adjList[u]) {
//         if (!mst[neighbor] && key[neighbor] > weight) {
//             key[neighbor] = weight
//             parent[neighbor] = u
//         }
//     }
// }


// var minkey = function (key, mst, V) {
//     let min = Infinity, index = -1
//     for (let i = 0; i < V; i++) {
//         if (!mst[i] && key[i] < min) {
//             min = key[i]
//             index = i
//         }
//     }
//     return index
// }

// let V = 6;
// let edges = [
//     [5, 2],
//     [5, 0],
//     [4, 0],
//     [4, 1],
//     [2, 3],
//     [3, 1]
// ];

// let graph = []
// let indegree = new Array(V).fill(0)
// let queue = []
// let visit = new Set()
// let stack = []
// var again = function (graph, node1, node2) {
//     if (!graph.has(node1)) {
//         graph.set(node1, [])
//     }
//     graph.get(node1).push(node2)
//     indegree[node2]++
// }

// for (let i = 0; i < V; i++) {
//     again(graph, edges[i][0], edges[i][1])
// }


// for (let i = 0; i < V; i++) {
//     if (indegree[i] == 0) {
//         queue.push(i)
//     }
// }

// while (queue.length > 0) {
//     let first = queue.shift()
//     visit.add(first)
//     for (let neighbor of graph[first]) {
//         indegree[neighbor]--
//         if (indegree[neighbor] == 0) {
//             queue.push(neighbor)

//         }
//     }
//     stack.push(first)
// }


// n = 4
// flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]]
// src = 0
// // dst = 3
// k = 1

// let graph = []
// for (let i = 0; i < n; i++) {
//     graph[i] = []
// }
// for (let [u, v, w] of flights) {
//     graph[u].push([v, w])
//     graph[v].push([u, w])
// }

// let dict = new Array(n).fill(-1)
// dict[src] = 0
// let queue = [[src, 0]]
// k++
// while (k-- > 0 && queue.length > 0) {
//     let length = queue.length
//     for (let i = 0; i < length; i++) {
//         let [neighbor, price] = queue.shift()
//         if (graph[neighbor]) {
//             for (let [news, newprice] of graph[neighbor]) {
//                 newprice = price + newprice
//                 if (newprice < dict[news]) {
//                     dict[news] = newprice
//                     queue.push([news, newprice])
//                 }
//             }
//         }
//     }
// }
// return dict[dst] == Infinity? -1:dict[dst]
// edges = [[0, 1], [0, 3], [0, 2], [2, 0], [2, 1], [1, 3]], n = 4, start = 0, destination = 3
// let graph = []

// for (let i = 0; i < n; i++) {
//     graph[i] = []
// }

// for (let [u, w] of edges) {
//     graph[u].push([w])
// }


// var dfs = function (graph, visit, start) {
//     if (start == destination) {
//         count++
//         return
//     }
//     for (let neighbor of graph[start]) {
//         visit[start] = true
//         if (!visit[neighbor]) {
//             dfs(graph, visit, neighbor)
//         }
//     }
//     visit[start] = false
// }


// let visit = new Array(n).fill(false)

// dfs(graph, visit, 0)
// return count



// mat = [[0, 0, 0], [0, 1, 0], [1, 1, 1]]

// const distance = new Array(rows);
// for (let i = 0; i < rows; i++) {
//     distance[i] = new Array(cols).fill(Infinity);
// }


// let queue = []

// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (mat[i][j] == 0) {
//             queue.push([i, j])
//             distance[i][j] = 0
//         }
//     }
// }
// while (queue.length > 0) {
//     let [r, c] = queue.shift()
//     for (let [rows, cols] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
//         let x = r + rows
//         let y = cols + c

//         if (x >= 0 && y >= 0 && x < rows && y < cols && distance[x][y] == Infinity) {
//             queue.push([x, y])
//             distance[x][y] = distance[x][y] + 1
//         }
//     }
// }
// console.log(distance)


// numCourses = 4, prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]

// let graph = []
// let indegree = new Array(numCourses).fill(0)
// let visit = new Array(numCourses).fill(false)
// let arr = []
// var again = function (graph, node1, node2) {

//     if (!graph[node1]) {
//         graph[node1] = []
//     }
//     graph[node1].push(node2)
//     indegree[node2]++
// }

// for (let i = 0; i < numCourses; i++) {
//     if (indegree[i] == 0) {
//         queue.push(i)
//     }
// }

// while (queue.length > 0) {
//     let first = queue.shift()
//     arr.push(first)
//     for (let neighbor of graph[first]) {
//         indegree[neighbor]--
//         if (indegree[neighbor] == 0) {
//             queue.push(neighbor)
//         }
//     }
// }
// console.log(arr)



// let visit = new Array(V).fill(-1)
// let parent = new Array(V).fill(-1)
// let low = new Array(V).fill(-1)
// let dict = new Array(V).fill(-1)
// let time = [0]
// let bridges = []

// var dfs = function (start, parent) {
//     visit[start] = true
//     dict[start] = low[start] = time[0]++
//     for (let neighbor of adj[start]) {
//         if (!visit[neighbor]) {
//             parent[neighbor] = start
//             dfs(neighbor, visit, parent, low, dict, time, bridges)
//             low[start] = Math.min(low[start], low[neighbor])

//             if (low[neighbor] > dict[start]) {
//                 bridges.push([start, neighbor])
//             }
//         }
//         else if (neighbor != parent[start]) {
//             low[start] = Math.min(low[start], dict[neighbor])
//         }
//     }

// }

// for (let i = 0; i < V; i++) {
//     if (!visit[i]) {
//         dfs(i, parent)
//     }
// }
// bridges.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
// console.log(bridges)




// V, adj, X

// var bfs = function (adj, start, visit) {
//     let queue = []
//     let number = 0
//     visit[start] = true
//     queue.push([start, 0])
//     while (queue.length > 0) {
//         let [first, step] = queue.shift()
//         for (let neighbor of adj[first]) {
//             if (!visit[neighbor]) {
//                 number++
//                 visit[neighbor] = true
//                 queue.push([neighbor, step + 1])
//                 if (neighbor == x) {
//                     return step + 1
//                 }
//             }
//         }
//     }
// }




// let visit = new Array(V).fill(false)
// let queue = []
// for (let i = 0; i < V; i++) {
//     if (!visit[i]) {
//         bfs(adj, i, visit)
//     }
// }


// let grid = [
//     ["X", "X", "X", "X"],
//     ["X", "O", "O", "X"],
//     ["X", "X", "O", "X"],
//     ["X", "O", "X", "X"]
// ]
// let rows = grid.length
// let cols = grid[0].length
// var dfs = function (start, end) {
//     if (start < 0 || start >= rows || end < 0 || end >= cols || grid[start][end] != "O") {
//         return
//     }
//     grid[start][end] = "B"

//     for (let [r, c] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
//         let x = r + start
//         let y = c + end
//         dfs(x, y)
//     }

// }
// for (let i = 0; i < rows; i++) {
//     if (grid[i][0] == "O") {
//         dfs(i, 0)
//     }
//     if (grid[i][cols - 1] == "O") {
//         dfs(i, cols - 1)
//     }
// }

// for (let i = 0; i < cols; i++) {
//     if (grid[0][i] == "O") {
//         dfs(0, i)
//     }
//     if (grid[rows - 1][i] == "O") {
//         dfs(rows - 1, i)
//     }
// }



// for (let i = 0; i < gird.length; i++) {
//     for (let j = 0; j < gird[0].length; j++) {
//         if (grid[i][j] == "O") {
//             grid[i][j] = "X"
//         }
//         else if (grid[i][j] == "B") {
//             grid[i][j] = "0"
//         }
//     }
// }

// [
//     ["X", "O", "X"],
//     ["O", "X", "O"],
//     ["X", "O", "X"]
// ]



// let graph = []

// let vertices = 0;
// for (let [u, v] of edges) {
//     vertices = Math.max(vertices, u, v);
// }
// vertices += 1;
// var again = function (graph, node1, node2) {
//     if (!graph[node1]) {
//         graph.set(node1, [])
//     }
//     if (!graph[node2]) {
//         graph.set(node2, [])
//     }
//     graph[node1].push(node2)
//     graph[node2].push(node1)
// }

// for (let i = 0; i < edges.length; i++) {
//     again(graph, edges[i][0], edges[i][1])
// }

// let visit = new Array(vertices).fill(false)
// let parent = new Array(vertices).fill(-1)
// let dict = new Array(vertices).fill(-1)
// let low = new Array(vertices).fill(-1)
// let time = [0]
// let bridges = []


// var dfs = function (graph, start, visit, parent, dict, low, bridges, time) {
//     visit[start] = true
//     dict[start] = low[start] = time[0]++
//     for (let neighbor of graph[start]) {
//         if (!visit[neighbor]) {
//             parent[neighbor] = start
//             dfs(graph, neighbor, visit, parent, dict, low, bridges, time)

//             low[start] = Math.min(low[start], low[neighbor])

//             if (low[neighbor] > dict[start]) {
//                 bridges.push(start, neighbor)
//             }
//         }
//         else if (neighbor != parent[start]) {
//             low[start] = Math.min(low[start], dict[neighbor])
//         }
//     }
// }

// for (let i = 0; i < vertices; i++) {
//     if (!visit[i]) {
//         dfs(graph, i, visit, parent, dict, low, bridges, time)
//     }
// }

// let grid = [
//     [2147483647, -1, 0, 2147483647],
//     [2147483647, 2147483647, 2147483647, -1],
//     [2147483647, -1, 2147483647, -1],
//     [0, -1, 2147483647, 2147483647]
// ]
// let rows = grid.length
// let cols = grid[0].length
// let number = 0


// for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//         if (grid[i][j] == 2147483647) {
//             queue.push([i, j])
//         }
//     }
// }

// while (queue.length > 0) {
//     let [start, end] = queue.shift()
//     for (const [r, c] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
//         let x = start + r
//         let y = end + c
//         if (x > 0 && y > 0 && x <= rows && y <= cols && grid[x][y] == 2147483647) {
//             grid[x][y] = grid[start][end] + 1
//             queue.push([x, y])
//         }
//     }
// }



times, n, k

let visit = new Array(n).fill(false)
let dict = new Array(n).fill(Infinity)
dict[n] = 0
let graph = []
for (let i = 0; i < V; i++) {
    graph[i] = []
}
for (let [u, v, w] of edges) {
    graph[u].push([v, w])  // Directed edge from u to v with weight w
}


var minkey = function (visit, dict, n) {
    let min = Infinity, index = -1

    for (let i = 0; i < n; i++) {
        if (!visit[i] && dict[visit] < min) {
            min = dict[visit]
            index = i
        }
    }
    return index
}

for (let i = 0; i < n - 1; i++) {
    let minkey = key(visit, dict, n)

    visit[minkey] = true

    for (let [neighbor, weight] of graph[minkey]) {
        if (!visit[neighbor] && dict[minkey] + weight < dict[neighbor]) {
            dict[neighbor] = dict[minkey] + weight
        }
    }
}
let p = dict.reduce((acc, dcc) => acc + dcc, 0)
console.log(p)