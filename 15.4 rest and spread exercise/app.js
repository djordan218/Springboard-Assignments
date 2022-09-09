// rest / spread operator exercise

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//         return num % 2 === 0
//     });
// };

// refactor the above function to use the rest operator and an arrow function

// function filterOutOdds (...args) {
//     return args.filter(function (v) {
//         return v % 2 === 0;
//     });
// };

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0);

// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator.

// function findMin (...nums) {
//     return Math.min(...nums);
// };

const findMin = (...nums) => Math.min(...nums);

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

// function mergeObjects (obj1, obj2) {
//     return ({...obj1, ...obj2});
// };

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

// function doubleAndReturnArgs(arr, ...args) {
//     return [...arr, ...args.map(function(n) {
//         return n*2;
//     })];
// };

const doubleAndReturnArgs = (arr, ...args) => [...arr, args.map(n => n*2)];

// slice and dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! Make sure that you are always returning a new array or object and not modifying the existing inputs.

// remove a random element in the items array and return a new array without that item

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

// return a new array with every item in array1 and array2

// function extend(array1, array2) {
//     return [...array1, ...array2];
// };

const extend = (array1, array2) => [...array1, ...array2];

// return a new object with all the keys and values from obj and a new key/value pair

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj} // create a new object
    newObj[key] = val; // identify the key you want to add and attach it to the newObj
    return newObj; // return it
};

// return a new object with a key removed

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key]; // using the delete modifier
    return newObj;
}

// combine two objects and return a new object

const combine = (obj, obj2) => {
    return {...obj, ...obj2};
}

// return a new object with a modified key and value

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}