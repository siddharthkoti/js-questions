function fetchWithTimeOut(url, timeout) {
    return new Promise((resolve, reject) => {
      const controller = new AbortController();
      const signal = controller.signal;
      let timerId = null;
  
      fetch(url, { signal })
        .then((res) => {
          clearTimeout(timerId);
          return res.json();
        })
        .then((res) => resolve(res))
        .catch((err) => {
          reject(err);
        });
  
      timerId = setTimeout(() => {
        console.log("aborting");
        controller.abort();
      }, timeout);
    });
  }
  
  fetchWithTimeOut("https://jsonplaceholder.typicode.com/todos/1", 1000)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  