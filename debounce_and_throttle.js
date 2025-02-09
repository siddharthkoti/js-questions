{/* <button onclick="throttledClick('helloSId', '2nd arguent')">
click Me
</button> */}

function clicked(n, m) {
    console.log(n, m)
}

function debounce(fn, delay) {
    let id; // id should be declared outside else it wont work
    return function(...args) {

        // this function will be called
        // so context of this function should be passed while calling
        const context = this;
        clearTimeout(id);
    
        id = setTimeout(() => {
            fn.call(context, ...args);
        }, delay)
    }
}

const debouncedClick = debounce(clicked, 300);


function throttle(fn, delay) {
    let timer;
    return function(...args) {
        if(timer) return;
        
        timer = setTimeout(() => {
            timer = null;
        }, delay);

        const context = this;
        fn.call(context, ...args);
        
    }
}

const throttledClick = throttle(clicked, 1000);
