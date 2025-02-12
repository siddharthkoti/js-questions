// implement LRU cache class
// should have;  get(key), put(key, value)
// should have LRU/MRU retrieval methods: getLeastRecent() & getMostRecent()
// should have printCache() to print the contents of the cache in order
// both put and get are considered as a noperation of 'used' 
// - so whichever key is fetched or set, its the most recently used  

// {
//    {key1: 11} -> least Recently used
//    {key2: 11}
//    {key3: 11}  -> most recently used
// }
// 
    
    // LRU implementation in JS
class LRUCache { 
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if(!this.cache.has(key)) {
            return undefined;
        }
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key, value) {
        // if already present -  delete the key 
        // check if the capaacity is full(will happen if the key isnt already present)
        // if full, delete the first key(least recently used) & add key to the end with given value
        // else, add as it is

        if(this.cache.has(key)) {
            this.cache.delete(key)
        }

        if(this.cache.size === this.capacity) {
            this.cache.delete(this.cache.keys().next().value);
            this.cache.set(key, value);
        } else {
            this.cache.set(key, value);
        }
    }

    getLeastRecentlyUsed() {
        return Array.from(this.cache)[0];
    }

    getMostRecent() {
        return Array.from(this.cache)[this.cache.size - 1];
    }

    printCache() {
        console.log('capacity: ', this.capacity);
        console.log('cache: ');
        for(let [key, value] of this.cache){
            console.log('key:', key, ' value: ', value);
        }
    }
}


const cache = new LRUCache(5);


cache.put('S', 1);
cache.put('I', 2);
cache.put('D', 3);
cache.printCache()
cache.put('H', 4);
cache.put('A', 5);
cache.put('R', 6);

cache.get('I');
console.log(cache.printCache())
cache.put('T', 7);
cache.printCache();

console.log('Least used:', cache.getLeastRecentlyUsed())
console.log('Most used:', cache.getMostRecent())