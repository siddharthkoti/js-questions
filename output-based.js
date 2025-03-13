// let c = { name: 'dimple'}
// c = 23;
// // console.log(typeof c)
// if(!typeof c === 'string') {
//     console.log('str')
// } else {
//     console.log('not str') // correct ANS
// }


// --------------
// const user = {
//     email:'e@e.com',
//     updateEmail: email => { this.email = email} 
// }

// user.updateEmail('new@new.new');
// console.log(user.email);
// // arrow functon does't work with this keyword inside obj

// ----------------------

// let arr = [1,2,3,4];

// arr.slice(0,1);
// arr.splice(0,1);
// arr.unshift(0);
// console.log(arr); // [0,2,3,4] // slice returns a new array

// -------------------------------------
// class NewClac {
//     constructor() {
//         this.count = 0;
//     }
//     increase() {
//         this.count++;
//     }
// }

// const calc = new NewClac();
// new NewClac().increase();

// console.log(calc.count); // 0 - two diff instances

// -------------------------------------------


// const person = {
//     hobbies: ['cooking']
// }

// function addHobby(hobby, hobbies = person.hobbies) {
//     hobbies.push(hobby);
//     return hobbies;
// }

// addHobby('run', [])
// addHobby('walk')
// addHobby('sing', person.hobbies);

// console.log(person.hobbies);

// -------------------------------------------------

// class Counter {
//     #count = 0;
//     increment() {
//         this.#count++;
//     }

//     getCount() {
//         return this.#count;
//     }
// }

// let counter = new Counter();
// counter.increment();

// console.log(counter.#count); // uncaught SyntaxError: Private field '#count' must be declared in an enclosing class

// ------------------------------------------------

// const add = x => x + x;

// function myFunc(num = 2, value = add(num)) {
//     console.log(num, value);
// }

// myFunc();
// myFunc(3);
// 2 4 & 3 6
// --------------------------
// class Counter {
//     constructor() {
//         this.count = 0;
//     }

//     increment() {
//         this.count++;
//     }
// }

// let c1 = new Counter();
// c1.increment();
// c1.increment();

// let c2 = c1;
// c2.increment();

// console.log(c1.count); // 3

// ------------------

// const myP = Promise.resolve('cool data');

// (async () => {
//     try {
//         console.log(await myP);
//     } catch(err) {
//         throw('error')
//     } finally {
//         console.log('finally')
//     }
// })(); // cool data finally

// ---------------------------------------
// let config = {
//     alert: setInterval(() => console.log('alert!'), 1000)
// }

// config = null;  /// this wont stop the interval

// ---------------------------------------------------
// let name = 'Dim';

// function getName() {
//     console.log(name);
//     let name = 'sac'
// }

// getName(); // error

// ----------------------------------------

