/**
 * At a time only 2 are executed, when one is done, the third one takes over. similarly, when 2nd is done, 4th is started. 
 * Note that, this doesnt wait for all 2 to be complted.
 **/

function getUserById(id, callback) {
    // simulating async request
    //   const randomRequestTime = Math.floor(Math.random() * 100) + 200;
    const randomRequestTime = [10000, 20000, 2000, 40000, 20000];
    console.log("current: ", id);
    setTimeout(() => {
      console.log("done: ", id);
      callback("User" + id);
    }, randomRequestTime[id - 1]);
  }
  
  function mapLimit(inputs, limit, iterateeFn, callback) {
    // write your solution here
    let outputs = [];
    let index = 0;
  
    function cb(result) {
      outputs.push(result);
      if (outputs.length === inputs.length) {
        callback(outputs);
      }
      if (index < inputs.length) {
        iterateeFn(inputs[index], cb);
        index += 1;
      }
    }
    inputs.slice(0, limit).forEach((item) => {
      iterateeFn(item, cb);
      index++;
    });
  }
  
  mapLimit([1, 2, 3, 4, 5], 2, getUserById, (allResults) => {
    console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
  });
  