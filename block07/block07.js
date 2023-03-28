/* How to create a vault with a code

1. Put the image of a vault that opens 
2. Create the console.logs that will calculate the code
3. Create alert tags that will notify the user of the code -- Have decided in a different route
4. Have a way that the user inputs the numbers
5. Have a code that verifys the in put, an if then statement maybe?
6. Display the vault and congratulate the user.

At this point in the code I have set the gif I want to be played and have figured
out how to request an input from the user when they click the safe.

1. Figure out how to play part of the gif animation and wait until code is input correctly to play the rest
2. Figure out how to validate the input from the user is the correct code in the correct order
3. Display the vault and congratulate the user.
*/

alert("You must enter the code to continue:");

const str1 = "You have received this message because you have been chosen to open an important vault. Here is the sececret combination:";
console.log(str1);

function myAlert() {
    let text = "You must enter the code to continue:";
    if (confirm(text) == true) {
        text = "You"
    }
}

let numOne = 15 - 12;
let numTwo = 5 * 10;
let numThree = 50 / 5;

console.log(numOne);
console.log(numTwo);
console.log(numThree);


const str2 = 'Now' + ' ' + 'Enter' + ' ' + 'The' + ' ' + 'Code.';
console.log(str2);

function myButton() {
    document.getElementById("demo").innerHTML = "This would've worked but I don't know how to validate the codes.";
  }