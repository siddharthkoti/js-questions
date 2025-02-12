// memoize function

function highLoop(a, b) {
    for(let i = 0; i < 100000000; i++) {
        continue;
    }

    return a * b;
}

console.time('first call')
highLoop(2, 3);
console.timeEnd('first call')

console.time('second call')
highLoop(2, 3);
console.timeEnd('second call')

console.time('third call')
highLoop(2, 3);
console.timeEnd('third call')

function memoize(fn) {
    const memo = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if(!memo.has(key)) {
            memo.set(key, fn.call(this, ...args));
        }
        return memo.get(key);
    }
}

const memoizedHighLoop = memoize(highLoop);
console.time('first call')
memoizedHighLoop(2, 3);
console.timeEnd('first call')

console.time('second call')
memoizedHighLoop(2, 3);
console.timeEnd('second call')

console.time('third call')
memoizedHighLoop(2, 3);
console.timeEnd('third call')
