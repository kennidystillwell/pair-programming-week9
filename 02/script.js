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

