/*

Create a function that detects odd numbers
Function must contain a filter and is able to recieve an array of numbers
Create a function that can detect a single integer
Also be able to return only single integer

*/

function filterOddNumbers(arr) {
    var oddArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddArr.push(arr[i]);
      }
    }
    if (oddArr.length === 1) {
      return oddArr[0];
    } else {
      return oddArr;
    }
  }

console.log(filterOddNumbers([2, 4, 6, 8, 11, 20, 15, 22])); // [ 11, 15]
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
console.log(filterOddNumbers([70, 42, 55, 81, 21, 91, 34])); // [55, 81, 21, 91]
console.log(filterOddNumbers([2, 4, 6, 8, 10, 11, 12])); // [11]
console.log(filterOddNumbers([1, 4, 6, 7, 93, 99, 101, 37, 1015])); // [11]
