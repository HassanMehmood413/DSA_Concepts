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