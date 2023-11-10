//Exercise 1
function createHelloWorld () {
  return "Hello World!";  
}
const hello = createHelloWorld();  
console.log(hello);

//Exercise 2
const arr = [1,2,3,4];
const result = [];


function transform(x) {
return x + 1;
};

for (let i=0; i < arr.length; i++) {
result.push(transform(arr[i]));
}

console.log(result);

//Exercise 3 

function debounce(fn, t) {
  let timeout; // created a variable to store timeout id

  let lastCallTime = 0; // initialized a variable to keep track of whenthe last function was called
  let lastCallArgs = []; // initialized a variable to store arguments of last function call

  return function (...args) { // returns a new function that accepts new arguments
    const currentTime = Date.now(); // gets the current timestamp

    lastCallArgs = args; // stores current function call's arguments to use later

    if (currentTime - lastCallTime >= t) {
      // if the time since the last call is > or = to 't', execute the function immediately
      fn(...args);         // calls the original function with the provided arguments
      lastCallTime = currentTime; // updates the timestamp of the last call
    } else {
      // if a new call occurs within  debounce time, clears previous timeout and schedules a new one
      clearTimeout(timeout); // clears any previous timeout
      timeout = setTimeout(() => {
        fn(...lastCallArgs);   // calls the original function with previous arguments
        lastCallTime = Date.now(); // updates the timestamp of the last call
      }, t);                   // schedules the function execution after the debounce time 't'
    }
  };
}

//Exercise 4

// //first solution
function createMultiplier (multiplier) { //function that takes a multiplier as an arguement
  return function (number) { //inner function that takes a number as an arguement
    return number * multiplier; //multiplies arguements (number * multiplier)
  }
}

const multiplyByFive = createMultiplier(5);
console.log(multiplyByFive(5)); 

// //second solution
// let x = 5;
// function createMultiplier(x){
//   return x * 2;
// }
// console.log(createMultiplier(x));


//Exercise 5

class Bookshelf {
  constructor(){
      this.title = [];
  }
  addBook(newBook){
      this.title.push(newBook);
      console.log(`${newBook.title} has been added to the bookshelf.`);
    }
  removeBook(lessBook){
    const indexToRemove = this.title.findIndex(book => book.title === lessBook.title);
    this.title.splice(indexToRemove, 1);
    console.log(`${lessBook.title} has been removed from the bookshelf.`);
  }
  getTotalBooks(){
      return this.title.length;
  }
  logAllTitles() {
    this.title.forEach(book => console.log(`These are the books in the bookshelf: ${book.title}`));
  }
}
const bookshelf = new Bookshelf();
bookshelf.addBook({title : "The Great Gatsby"});
bookshelf.addBook({title : "To Kill a Mockingbird"});
bookshelf.addBook({title : "Pride and Prejudice"});
console.log(bookshelf.getTotalBooks()); // 3
bookshelf.removeBook({title : "To Kill a Mockingbird"});
bookshelf.removeBook({title : "Pride and Prejudice"});
console.log(bookshelf.getTotalBooks()); // 2
bookshelf.logAllTitles();

//Exercise 6

function expect(val) {
  return {
    toBe: function (otherVal) {
      return { "value": val === otherVal };
    },
    notToBe: function (otherVal) {
      return { "value": val !== otherVal };
    }
  };
}

//one
const result1 = expect(5).toBe(5);
console.log(result1);

//two
const result2 = expect(5).toBe(null);
console.log(result2);

//three
const result3 = expect(5).notToBe(null);
console.log(result3);