// html code
/*
<button id="clickMe" onclick="clicked('helloSId', '2nd arguent')">
click Me
</button>
<button id="clickMeEventListener">
click Me(with event listener - Debounce)
</button>
<button id="clickMeEventListenerThrottle">
click Me(with event listener - Throttle)
</button>*/


document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('clickMeEventListener');
    button.addEventListener('click', debouncedClick);

    const button2 = document.getElementById('clickMeEventListenerThrottle');
    button2.addEventListener('click', throttledClick); // by default, first param will be passed as 'event' object & this refers to button element

})


function clicked(n, m) {
    console.log(n, m)
    console.log('this:', this);
}

function debounce(fn, delay) {
    let id; // id should be declared outside else it wont work
    return function (...args) {
        // this function will be called

        // so context of this function should be passed while calling/
        // this is important because 'this' might refer to the 'html' element when called on an event handler
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
    return function (...args) {
        if (timer) return;

        timer = setTimeout(() => {
            timer = null;
        }, delay);

        const context = this;
        fn.call(context, ...args);

    }
}

const throttledClick = throttle(clicked, 1000);
