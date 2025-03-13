// Currying in JavaScript transforms functions with multiple arguments 
// into a series of single-argument functions, enhancing reusability

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function sum(a, b, c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // Output: 6
console.log(curriedSum(1, 2)(3)); // Output: 6
console.log(curriedSum(1, 2, 3)); // Output: 6

// implement infinte currying : add(5)(5)(10)(20)(10)() -> 50

function add(a) {
    return function(b) {
        if(b) {
            return add(a+b) 
        }
        return a;
    }
}

console.log(add(5)(5)(10)(20)(10)())