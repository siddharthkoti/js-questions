function createAsyncTasks() {
    return new Promise((resolve, reject) => {
        
        let value = Math.floor(Math.random() * 10);
        console.log(value);
        setTimeout(() => {
            if(value > 5) {
                resolve('resolved ' + value);
            } else {
                reject('error ' + value);
            }
            
        }, value * 1000);
    });
}

const tasks = [
    createAsyncTasks(),
    createAsyncTasks(),
    createAsyncTasks(),
    createAsyncTasks(),
    createAsyncTasks(),
    createAsyncTasks(),
    ];
    
function asyncParallel(tasks, callback) {
    let error = [];
    let results = [];
    let completed = 0;
    
    tasks.forEach((task) => {
        task.then((value) => {
            results.push(value)
        }, (err) => {
            error.push(err)
        }).finally(() => {
            completed++;
            if(completed === tasks.length) {
                    callback(error, results);
                }
        });
    });
}

// tasks and a callback which is called when all of the promises are resolved
asyncParallel(tasks, (error, results) => {
    console.log(error);
    console.log(results);
});


