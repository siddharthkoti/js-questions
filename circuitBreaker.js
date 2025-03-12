// implement a curcuit breaker, that halts the function for 'delay' time if it fails for y count.


const circuitBreaker = function (fn, failureCount, delay) {
    let failures = 0;
    let flag = true;


    return (...args) => {
        if (!flag) {
            console.log('circuit is in delay due to errors');
            return;
        }
        try {
            const result = fn(...args);
            failures = 0;
            return result;
        } catch (err) {
            failures++;
            console.log('error ', failures);
            if (failures === failureCount) {
                flag = false;
                setTimeout(() => { flag = true }, delay); // similar to throttle
            }
        }

    }
}

const testFunction = () => {
    let count = 0;

    return function () {
        count++;
        if (count < 4) {
            throw "failed";
        } else {
            return "hello";
        }
    }
};


let t = testFunction();
let c = circuitBreaker(t, 3, 1000);

c();
c();
c();
c();
c();
c();
c();
c();
setTimeout(() => { console.log('delayed execution:', c()); }, 1500)





