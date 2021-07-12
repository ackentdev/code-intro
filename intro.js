// boilerplate nonsense
const readline = require('readline');

// typing the comand node <file-name> will run your javascript file

// console.log is a prebuilt function that prints a value to the console
console.log('hello, world!');
// Creating variables with different datatypes
const firstName = "Adam";
let age = 28;

console.log(firstName, age);

const isCool = true;

let powerLevel;
console.log(powerLevel)

// Numbers
let x = 4;
let favNum = 12;
let favSqr = 12 * 12
console.log(favSqr)

// Strings

let favRobot = 'Voltron';
let favDion = "Celine";

console.log(`${favRobot} would totally kick ${favDion}'s butt`)
console.log("Jk, " + favRobot + " and " + favDion + " are best friends now.")

// User Input
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  reader.question("Enter a number to see if it's Adam's favorite: ", function(num){
      if (+num === 12){
          console.log("That's Adam's favorite!")
      } else {
          console.log("Womp womp thanks for playing")
      }
      reader.close();
  });