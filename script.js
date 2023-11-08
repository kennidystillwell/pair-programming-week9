//Exercise 1
function createHelloWorld () {
    return function () {
        return "Hello World!";
    };
}
const hello = createHelloWorld();  
console.log(hello);

//Exercise 2