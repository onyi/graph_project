function numRegions(graph) {
    let v = {};
    let c = {};
    Object.keys(graph).forEach( key => {
        if (!v[key] ){
            v[key] = Object.keys(c).length + 1;
            c[v[key]] = new Set();
            c[v[key]].add(key);
        }
        graph[key].forEach(val => {
            // console.log(`Neighbor: ${val}`);
            v[val] = v[key];
        })

        // console.log(`Component: ${JSON.stringify(c)}`);
        // console.log(`Visited: ${JSON.stringify(v)}`);
    })
    return Object.keys(c).length;
}

module.exports = {
    numRegions
};

let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'e': ['d'],
    'd': ['e', 'c'],
};
console.log(numRegions(graph1));