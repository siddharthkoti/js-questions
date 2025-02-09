// Implement event emitter
// problem: https://bigfrontend.dev/problem/create-an-Event-Emitter
// youtube solution: https://www.youtube.com/watch?v=LudDrekDRVk&ab_channel=JSer

class EventEmitter {
  subscriptions = {};
  subscribe(eventName, callback) {
  	if(!(eventName in this.subscriptions)) {
      this.subscriptions[eventName] = [];
    }

    this.subscriptions[eventName].push(callback);

    return {
      release: () => {
        if(!(eventName in this.subscriptions)) 
          return;
        
        const index = this.subscriptions[eventName].indexOf(callback);
        
        if(index === -1) 
          return;
        
        this.subscriptions[eventName].splice(index, 1);

        if(this.subscriptions[eventName].length === 0) 
          delete this.subscriptions[eventName]; 
      }
    }
  }
  
  emit(eventName, ...args) {
    if(!(eventName in this.subscriptions)) 
          return;
    
  	const callbacks = this.subscriptions[eventName];
    for(let callback of callbacks) {
      callback(...args); 
    }
  }
}