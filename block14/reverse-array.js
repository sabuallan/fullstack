/*

Define an input array of integers.
Define an empty array for the output.
Use a for loop to iterate through each element in the input array in reverse order:
    Set the starting index of the loop to the length of the input array minus one.
    The loop should run as long as the index is greater than or equal to zero.
    Decrement the index by one on each iteration.
Within the for loop, push each element of the input array into the output array in reverse order:
    Use the push method to add the current element to the end of the output array.
Once the loop is complete, the output array should contain the elements of the input array in reverse order.
Print the output array to the console or return it from the function, depending on your use case.

*/

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }

console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray([1, 3, 5, 7, 9, 11])); // [11, 9, 7, 5, 3, 1]
console.log(reverseArray([20, 50, 30, 60, 200])); // [200, 60, 30, 50, 20]
console.log(reverseArray([1, -1, 2, -3, 5, -8, 13])); // [13, -8, 5, -3, 2, -1, 1]
console.log(reverseArray([89, 74, 62, 49, 36, 20, 17, 13, 8, 0])); // [89, 74, 62, 49, 36, 20, 17, 13, 8, 0]
