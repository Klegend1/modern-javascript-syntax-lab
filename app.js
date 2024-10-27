//Exercise 1: Applying Array.prototype.map()

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const Nums = nums.map((currentElement) => {
    return currentElement * 2;
});

console.log (Nums);


//Exercise 2: Array destructuring

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstTopping, secondTopping] = pizzaToppings;

console.log (firstTopping, secondTopping);


//Exercise 3: Destructuring object

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  const {make, model} = car;

  console.log(make, model);
  
  

  //Exercise 4: Applying the spread operator on arrays

  // Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);



//Exercise 5: Applying the spread operator on objects

// Duplicate the following object and spread its values into a new variable `myCar`.


  const myCar = {...car, model: 'q7'};

  console.log(myCar,model);

  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  


  //Exercise 6: Dynamic keys in objects

  // Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const userProfile = {
  username: "kaismith",
  age: 32,
  email: "kaismith@email.com",
  isActive: true
};

const propertyName = "kaismith";

console.log(userProfile);

//Exercise 8: Default parameters

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function Animal(noun = 'bear', adjective = 'black') {
  console.log(`The ${noun} is ${adjective}.`);
}


//function addTwoParam 


//Exercise 9: Ternary operator

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

pizza === 'tasty' ? 

console.log('yum') : 

console.log('yuck');

//Exercise 10: Boolean gates

// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

//const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here

// Log the result
//console.log('Language setting:', LANG);

const localLangConfig = null; 

const LANG = localLangConfig || 'en'; 

console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

//const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here

// Log the result
//console.log('User theme setting:', USER_THEME);

const userSavedTheme = null; 

const USER_THEME = userSavedTheme || 'light'; 

console.log('User theme setting:', USER_THEME);



