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