/*

Accept a string of lowercase letters as input.
Initialize two variables, vowelCount and consonantCount, to 0.
Loop through each character in the input string:
    If the character is a vowel (i.e., 'a', 'e', 'i', 'o', or 'u'), increment vowelCount by 1.
    Otherwise, increment consonantCount by 1.
Print the input string followed by the number of consonants and vowels using string concatenation.

*/


function countConsonantsAndVowels(str) {
    let vowels = 0;
    let consonants = 0;
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if ("aeiou".includes(char)) {
        vowels++;
      } else if (char >= "a" && char <= "z") {
        consonants++;
      }
    }
    console.log(`${str} has ${consonants} consonants and ${vowels} vowels`);
  }
  
  countConsonantsAndVowels("hello"); // "hello has 3 consonants and 2 vowels"
  countConsonantsAndVowels("ukelele"); // "ukelele has 3 consonants and 4 vowels"
  countConsonantsAndVowels("awesome"); // "awesome has 3 consonants and 4 vowels"
  countConsonantsAndVowels("onomonopia"); // "onomonopia has 4 consonants and 6 vowels"
  countConsonantsAndVowels("textbook"); // "textbook has 5 consonants and 3 vowels"
  countConsonantsAndVowels("Honorificabilitudinitatibus"); // "Honorificabilitudinitatibus has 14 consonants and 13 vowels"