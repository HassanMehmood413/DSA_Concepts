
https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1?page=1&category=Graph&sortBy=submissions


class Solution {
    // Function to return Breadth First Traversal of given graph.
   bfsOfGraph(V, adj) {
            let visit = new Array(V).fill(false)
            let arr = [];            // To store BFS traversal order
            let queue = [];    
            queue.push(0)
            visit[0] = true

            while (queue.length > 0) {
                let first = queue.shift();   // Get the first node in the queue
                arr.push(first);             // Add it to the result array

                for (let neighbor of adj[first]){
                    if (visit[neighbor] == false) {
                        visit[neighbor] = true  // Mark the neighbor as visited
                        queue.push(neighbor); // Add the neighbor to the queue
                    }
                }
            }

            return arr; // Return the BFS traversal order

    }
}

input : 
V = 5, E = 4
adj = {{1,2,3},{},{4},{},{}}

output : 0,1,2,3,4