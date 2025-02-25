const user = {
    name: 'John'
} 

function printName(surname, type) {
    console.log(type, ": ",this.name, surname);
}

// -------------------------------------- bind ---------------------------------------

const printNameBind = printName.bind(user, 'Doe');
printNameBind('bind'); // John Doe

// now create myBind function

Function.prototype.myBind = function(context, ...args) { // args: arguments passed to the orignal function
    const fn = this; // printName will be 'this'

    return function(...args2) { // arguments passed to binded function
        fn.call(context, ...args, ...args2);
    }   
}

const printNameMyBind = printName.myBind(user, 'Doe');
printNameMyBind('myBind'); // John Doe

// -------------------------------- call ---------------------------------------------

printName.call(user, 'Doe', 'call');

Function.prototype.myCall = function(context, ...args) {
    if (typeof this !=="function"){
        throw new Error(this, "invalid call")
    }

    context.fn = this;
    context.fn(...args);
    delete context.fn;
}
printName.myCall(user, 'Doe', 'myCall');
console.log(user);
// -------------------------------- apply ---------------------------------------------

printName.apply(user, ['Doe', 'apply']);

Function.prototype.myApply = function(context, [...args]) {
    if (typeof this !=="function"){
        throw new Error(this, "invalid call")
    }

    context.fn = this;
    context.fn(...args);
    delete context.fn;
}
printName.myApply(user,['Doe', 'myApply']);
console.log(user);

