function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        let count = 0;
        let n = promises.length;
        let res = [];
        promises.forEach((promise, i) => {
            promise.then((data) => {
                res[i] = data;
                count++;
                if(count === n) {
                    resolve(res);
                }
            }).catch(reject)

        })
    })
}

let promises = [Promise.resolve('1'), Promise.reject('errror'), Promise.resolve('hello')];
// let promises = [Promise.resolve('1'), Promise.resolve('hello'), Promise.resolve('hello')];

promiseAll(promises).then(console.log).catch(console.error).finally(() => console.log('all settled'));