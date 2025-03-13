
// ------------------
function createAsyncTasks() {
    return new Promise((resolve, reject) => {

        let value = Math.floor(Math.random() * 10);
        console.log(value);
        setTimeout(() => {
            if (value > 5) {
                resolve('resolved ' + value);
            } else {
                reject('error ' + value);
            }

        }, value * 1000);
    });
}

const tasks = [
    createAsyncTasks,
    createAsyncTasks,
    createAsyncTasks,
    createAsyncTasks,
    createAsyncTasks,
    createAsyncTasks,
];

async function asyncSequence(tasks, callback) {
    let errors = [];
    let results = [];
    let completed = 0;

    for (let i = 0; i < tasks.length; i++) {
        let fn = tasks[i];
        try {
            let response = await fn();
            console.log(response);
            results.push(response);
        } catch (err) {
            console.log(err);
            errors.push(err);
        } finally {
            completed++;
            if (completed === tasks.length) {
                callback(errors, results);
            }
        }
    }
}

// tasks and a callback which is called when all of the promises are resolved
asyncSequence(tasks, (error, results) => {
    console.log(error);
    console.log(results);
});