// problem statement: 
// Create a retry function which takes 2 params, a callback on which retry is to be made and no of retries.
// it has to return a promise, which resolves if success, else rejects after n no of failed retries


function retry(fetcher, retries) {
  return new Promise((resolve, reject) => {
    let count = 1;
    const caller = () => {
      fetcher().then(
        (res) => {
          resolve(res);
        },
        (err) => {
          if (count < retries) {
            count++;
            console.log("retry: ", count);

            caller();
          } else {
            reject(err);
          }
        }
      );
    };

    caller();
  });
}

const fetchGithubProfile = async () => {
  console.log("fetching");
  const rawResponse = await fetch(
    "https://api.githubk.com/users/siddharthkoti" // edit thid api to make it fail
  );
  const res = await rawResponse.json();

  return res;
};

retry(fetchGithubProfile, 4);




function retry2(fn, retries) {
  return new Promise((resolve, reject) => {
    function caller(retries) {
      fn().then((res) => {
        resolve(res);
      }, (error) => {
        console.log('retries: ', retries);
        if (retries === 0) {
          reject(error)
          return;
        }
        caller(--retries);
      })
    }

    caller(retries);
  })
}