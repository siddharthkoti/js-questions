// polyfill for map


Array.prototype.myMap = function(cb) {
    let context = this;
    let result = [];
    
    for(let i = 0; i < context.length; ++i) {
        result.push(cb(context[i], i));
    }
    
    return result;
}


console.log([1,2,3].myMap(e => 2*e));