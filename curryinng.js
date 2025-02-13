// Currying in JavaScript transforms functions with multiple arguments 
// into a series of single-argument functions, enhancing reusability



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