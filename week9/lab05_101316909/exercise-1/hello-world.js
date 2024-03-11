// hello-world.ts
var greeter = function (name) {
    console.log('Hello ' + name);
};
greeter("John Smith");
// ES6 version of the code
var greeterES6 = function (firstName, lastName) {
    console.log("Hello ".concat(firstName, " ").concat(lastName));
};
greeterES6("John", "Smith");
