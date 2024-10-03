
// A redundant connection refers to an extra edge in a graph that, if removed, will not disconnect the graph. It forms a cycle, meaning that there is already a way to connect all nodes in the graph, so adding the extra edge is unnecessary and causes redundancy.
// problem for this : https://leetcode.com/problems/redundant-connection/

let parent = []
let rank = []
for (let i = 0; i < n; i++) {
    parent[i] = i
    rank[i] = 0
}


var findpath = function (x, parent) {
    if (parent[x] != x) {
        parent[x] = findpath(parent[x], parent)
    }
    return parent[x]
}

var union = function (x, y, parent, rank) {
    let rankx = findpath(x, parent)
    let ranky = findpath(y, parent)

    if (rankx !== ranky) {
        if (rank[rankx] > rank[ranky]) {
            parent[ranky] = rankx
        }
        else if (rank[rankx] < rank[ranky]) {
            parent[rankx] = ranky
        }
        else {
            parent[rankx] = ranky
            rank[ranky]++
        }
    }
}