const obj = {
    a: [{day: 31 }, { month: 12 }, { year: 2024}],
    b: 'Hello',
    c: [{day: 31 }, { month: 12 }, { year: 2024}],
}

const deepClone = (obj) => {
    if(obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
            clone[key] = deepClone(obj[key]);
    }
    return clone;
}

console.log('obj: ', obj);
console.log('cloned obj:', deepClone(obj));