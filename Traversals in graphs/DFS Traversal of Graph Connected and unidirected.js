

https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1?page=1&category=Graph&sortBy=submissions


class Solution {
    dfsOfGraph(V, adj) {
        var dfsR = function(adj, visit, arr, i) {
            visit[i] = true;    // Mark node i as visited
            arr.push(i);        // Add node i to the traversal list
            
            for (let neighbor of adj[i]) {
                if (!visit[neighbor]) { // If the neighbor has not been visited
                    dfsR(adj, visit, arr, neighbor); // Recursively visit the neighbor
                }
            }
        }
        
        let visit = new Array(V).fill(false); // To track visited nodes
        let arr = [];  // To store the DFS traversal order
        
        dfsR(adj, visit, arr, 0);
        
        return arr;
    }
}