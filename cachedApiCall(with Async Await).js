function cachedApiCall(time) {
    const cache = {};

    return async (url, config) => {
        const key = `${url}${JSON.stringify(config)}`;
        const entry = cache[key];

        if (entry?.expiry > Date.now()) {
            console.log('cached');
            return entry.res;
        }


        console.log('new call');
        const res = await fetch(url);
        const data = await res.json();
        cache[key] = { res: data, expiry: Date.now() + time };
        return data;
    };
}

function cachedApiCallCleaner(time) {
    const cache = {};

    return async (url, config) => {
        const key = `${url}${JSON.stringify(config)}`;
        const entry = cache[key];

        if (!entry || Date.now() > entry.expiry) {
            console.log('new call');

            const res = await fetch(url);
            const data = await res.json();
            cache[key] = { res: data, expiry: Date.now() + time };
        }
        return cache[key].res;
    };
}

// cache api calls and if same url is called within 1500ms then return the result from cache
const call = cachedApiCall(1500);
call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("1", a));
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("2", a));
}, 800);
setTimeout(() => {
    call('https://jsonplaceholder.typicode.com/todos/1', {}).then((a) => console.log("3", a));
}, 2000);