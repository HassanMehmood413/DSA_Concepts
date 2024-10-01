class Solution {
    // Function to detect cycle in a directed graph using DFS
    isCyclicDFS(V, adj) {
        let visit = new Array(V).fill(false);
        let recursionStack = new Array(V).fill(false);

        // Iterate over each vertex
        for (let i = 0; i < V; i++) {
            if (!visit[i]) {
                if (this.dfs(adj, visit, recursionStack, i)) {
                    return 1; // Cycle exists
                }
            }
        }
        return 0; // No cycles detected
    }

    // Recursive DFS function
    dfs(adj, visit, recursionStack, node) {
        visit[node] = true; // Mark the node as visited
        recursionStack[node] = true; // Add to recursion stack

        // Explore all neighbors
        for (let neighbor of adj[node]) {
            if (!visit[neighbor]) {
                if (this.dfs(adj, visit, recursionStack, neighbor)) {
                    return true; // Cycle found
                }
            } else if (recursionStack[neighbor]) {
                return true; // Cycle found
            }
        }

        recursionStack[node] = false; // Remove from recursion stack
        return false; // No cycle found in this path
    }
}