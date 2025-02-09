/*
    ** Implement a counter function which maintains a count and increments it everytime we call the counter function and also we can reset the counter by calling a reset function. check below for the explanation:


    counter(); // 1
    counter(); // 2
    counter(); // 3

    counter.reset();

    counter(); // 1
    counter(); // 2


*/
const counter = (() => {
    let count =  0;
    const inner = () => {
        count++;
        console.log(count);
        return count;
    }
    
    inner.reset = () => {
        count = 0;
    }
    return inner;
})(); 




counter();
counter();
counter();

counter.reset();

counter();
counter();
counter();
counter();
counter();

counter.reset();
counter();
counter();