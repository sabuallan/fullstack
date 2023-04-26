/*

Create a loop that iterates from 1 to 100, each iteration printing a new line.
Check if the current number is a multiple of both 3 and 5. If so, print "FizzBuzz".
If not, check if the current number is a multiple of 3. If so, print "Fizz".
If not, check if the current number is a multiple of 5. If so, print "Buzz".
If none of the above conditions are met, print the current number.

*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  