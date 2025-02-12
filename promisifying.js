
function wait(seconds) {
    return new Promise(function(resolve) {
        setTimeout(() => {
            resolve();
        }, seconds * 1000); 
        // which can also be written as 
        // setTimeout(resolve, seconds * 1000); 
    })
}

(async function(){
    
    console.log('starting the wait(promisified the setTimeout)...');
    await wait(5);
    console.log('logged after 5 seconds!')

})()