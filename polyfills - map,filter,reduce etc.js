// polyfill for map

Array.prototype.myMap = function(cb) {
    let context = this;
    let result = [];
    
    for(let i = 0; i < context.length; ++i) {
        result.push(cb(context[i], i));
    }
    
    return result;
}

console.log('myMap: [1,2,3] -> ',[1,2,3].myMap((e, i) => i*e));


// polyfill for filter
Array.prototype.myFilter = function(cb) {
    let result = [];

    let arr = this;
    for(let i = 0; i< arr.length; i++) {
        if(cb(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    
    return result;
}
console.log('myFilter: [1,2,3,4] -> ',[1,2,3,4].myFilter((e, i) => (e % 2 === 0)));

// polyfill for reduce
Array.prototype.myReduce = function(cb, initialValue) {
    let arr = this;
    
    for(let i = 0; i< arr.length; i++) {
        initialValue = cb(initialValue, arr[i]);
    }
    return initialValue;
}
console.log('Array reduce: [1,2,3,4] -> ', [1,2,3,4].reduce((a,b) => a + b, 0));
console.log('myReduce: [1,2,3,4] -> ', [1,2,3,4].myReduce((a,b) => a + b, []));
