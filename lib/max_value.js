function maxValue(node, visited=new Set()) {
    if(node.neighbors.length === 0){
        return node.val;
    }
    if(visited.has(node)) return node.val;
    
    let max = node.val;
    visited.add(node);

    let maxes = node.neighbors.map( neighbor => {
        return maxValue(neighbor, visited)
        
        // return visited.has(neighbor)
        //     ? neighbor.val
        //     : maxValue(neighbor, visited)
    });

    maxes.push(max);
    return Math.max(...maxes);
}

module.exports = {
    maxValue
};