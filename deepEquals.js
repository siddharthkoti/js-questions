function deepEquals(valueOne, valueTwo) {
    if (typeof valueOne !== 'object' && typeof valueTwo !== 'object') {
        let isValueOneNaN = isNaN(valueOne) && typeof valueOne !== 'string';
        let isValueTwoNaN = isNaN(valueTwo) && typeof valueTwo !== 'string';

        if (isValueOneNaN && isValueTwoNaN) return true;

        if (typeof valueOne !== typeof valueTwo) return false;
        if (valueOne !== valueTwo) return false;

        return true;
    }

    if (valueOne === null && valueTwo === null) return true;
    if (valueOne === null || valueTwo === null) return false;
    if(valueOne === valueTwo) return true;
    if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
        let valueOneLength = valueOne.length;
        let valueTwoLength = valueTwo.length;

        if (valueOneLength !== valueTwoLength) return false;
        for (let i = 0; i < valueOneLength; i++) {
            if (!deepEquals(valueOne[i], valueTwo[i])) {
                return false
            };  
        }
        return true;
    }
    if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

    // object
    const valueOneKeys = Object.keys(valueOne);
    const valueTwoKeys = Object.keys(valueTwo);
    if (valueOneKeys.length !== valueTwoKeys.length) {
        return false;
    }
    for (let i = 0; i < valueOneKeys.length; i++) {
        const key = valueOneKeys[i];
        if (!valueTwoKeys.includes(key)) {
            return false;
        }

        if (!deepEquals(valueOne[key], valueTwo[key])) {
            return false;
        }
    }

    return true;
}


console.log('TRUE:\n\n')

console.log(deepEquals(1, 1))
console.log(deepEquals('abc', 'abc'))
console.log(deepEquals(NaN, NaN))
console.log(deepEquals([], []))
console.log(deepEquals([1], [1]))
console.log(deepEquals([[1, 2]], [[1, 2]]))
console.log(deepEquals([[1, 2, [3]]], [[1, 2, [3]]]))
console.log(deepEquals({}, {}))
console.log(deepEquals({ a: 1 }, { a: 1 }))
console.log(deepEquals({ a: 1, b: 2 }, { a: 1, b: 2 }))
console.log(deepEquals({ a: 1, b: { c: 3, d: [1, 2, 3] } }, { a: 1, b: { c: 3, d: [1, 2, 3] } }));
const array = Array(100000).fill('a'); 
console.log(deepEquals(array, array))


console.log('\nFalse:\n\n')
console.log(deepEquals(1, 2))
console.log(deepEquals('ab', 'abc'))
console.log(deepEquals(NaN, 'abc'))
console.log(deepEquals(null, NaN))
console.log(deepEquals([1], [2]))
console.log(deepEquals([[1, 2, 3]], [[1, 2]]))
console.log(deepEquals([[1, 2, 3]], [[1, 2, 4]]))
console.log(deepEquals({ a: 1 }, {}))
console.log(deepEquals({ a: 1 }, { a: 2 }))
console.log(deepEquals({ a: 1, b: 2 }, { a: 1, c: 2 }))
console.log(deepEquals({ a: 1, b: { c: 3, d: [1, 2, 3, 4] } }, { a: 1, b: { c: 3, d: [1, 2, 3] } }));
console.log(deepEquals({a: undefined, b: 2}, {b: 2, c: 3 }))