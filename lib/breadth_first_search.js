// import GraphNode from './graph_node';

function breadthFirstSearch(startingNode, targetVal) {
    if(!startingNode) return null;
    let q = [startingNode];
    let h = {};
    while(q.length !== 0){
        let node = q.shift();
        if (h[node.val]) {
            continue;
        }
        h[node.val] = node;
        // console.log(`Node: ${node.val}`);
        if (node.val === targetVal){
            return node;
        }
        q = q.concat(node.neighbors);

    }
    return null;
}

module.exports = {
    breadthFirstSearch
};


// let a = new GraphNode('a');
// let b = new GraphNode('b');
// let c = new GraphNode('c'); 
// a.neighbors = [b, c];
// breadthFirstSearch(a, 'x');