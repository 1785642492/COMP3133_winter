// hello-world.ts
var greeter = function (name) {
    console.log('Hello ' + name);
};
greeter("John Smith");

// ES6 version of the code
let greeterES6 = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}`);
};
greeterES6("John", "Smith");


