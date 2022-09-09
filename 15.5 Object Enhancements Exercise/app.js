// same keys and values

// function createInstructor(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }

// now in an ES2015 Version

function createInstructor(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// Computed Property Names

// var favoriteNumber = 42;
// var instructor = {
//   firstName: 'Colt',
// };

// instructor[favoriteNumber] = 'That is my favorite!';

// now in an ES2015 version
let favoriteNumber = 42;

const instructor = {
  firstName: 'Colt',
  [favoriteNumber]: 'That is my favorite!',
};

// Object Methods

// var instructorTwo = {
//   firstName: 'Colt',
//   sayHi: function () {
//     return 'Hi!';
//   },
//   sayBye: function () {
//     return this.firstName + ' ' + 'says bye!';
//   },
// };

// now in an ES2015 version
const instructorTwo = {
  firstName: 'Colt',
  sayHi() {
    return 'Hi!';
  },
  sayBye() {
    return this.firstName + ' says bye!';
  },
};

// createAnimal function
// Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

const d = createAnimal;
d.bark();

const s = createAnimal;
s.bleet();

function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      return noise;
    },
  };
}
