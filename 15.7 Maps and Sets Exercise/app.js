// Quick Question #1
// What does the following code return?
new Set([1, 1, 2, 2, 3, 4]);
// {1,2,3,4}
// sets get rid of duplicates

// Quick Question #2
// What does the following code return?
[...new Set('referee')].join('');
// 'ref'
// the spread operator iterates through each letter of 'referee'
// the set gets rid of duplicates
// ['r','e','f']
// .join('') takes that array and turns it into a string

// Quick Question #3
// What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true);
m.set([1, 2, 3], false);
// we create a new map assigned to m variable
// {[1,2,3] => true}
// {[1,2,3] => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

// function hasDuplicate(arr) {
//   return new Set(arr).size !== arr.length;
// }
// create a new set from the passed in array
// if the set stays the same (because it doesn't eliminate any duplicates), then it must not have any

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function isVowel(char) {
  return 'aeiou'.includes(char);
}
// this is a function that returns the letter if the character passed in contains a vowel letter

function vowelCount(str) {
  const vowelMap = new Map();
  // want create a map that we input the letters into
  for (let char of str) {
    // loop through the string
    let lowerCaseChar = char.toLowerCase();
    // create a variable with the character to lower cased
    if (isVowel(lowerCaseChar)) {
      // if the lowerCaseChar runs through the isVowel function and returns
      if (vowelMap.has(lowerCaseChar)) {
        // if the Map already contains the char
        vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1); // add 1
      } else {
        // if not
        vowelMap.set(lowerCaseChar, 1); // make it 1
      }
    }
  }
  return vowelMap;
}
