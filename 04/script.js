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


