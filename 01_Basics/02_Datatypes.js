"use strict"; //treat js code as newer version
// alert(12/4) => as we are using nodejs not browser as in nodejs we have to define alert first
// a.Primitive : These are immutable means value is directly assigned to variables (pass by value)
// 1.Number :
let num = 1 //(limit 2^53-1)
console.log(num)

// 2.String :
let name = "Arpit"
let message = `Welcome, ${name}!`;
console.log(message)

// 3.BigInt
let bigIntNumber = 9007199254740991n //Note "n" at end
console.log(bigIntNumber)

// 4.Boolean
let hasPermission = false
console.log(hasPermission) //Logical operations (like &&, ||, and !) often work with boolean values.

// 5.Undefined
let s;
console.log(s) //For uninitialize variable output : undefined,it is automatically assigned by js itself
// it also the return value of functions that don't explicitly return anything

// 6.Null 
let data = null
console.log(data) // it should be assigned by developer

// 7.Symbol(ES6+)
const id = Symbol('id') //A unique and immutable data type primarily used for creating unique identifiers for object properties
console.log(id)

// b.Non-Primitive : These are mutable means pass by reference
// 1.Object : A collection of key-value pairs
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2021,
  isElectric: false
}

// 2.Array : A special type of object that holds a list of ordered values
let fruits = ["apple", "banana", "cherry"]
console.log(fruits[0])

/*  3.Function : In JavaScript are also objects, meaning they are a type of reference data they can be passed around like variables, assigned to other variables, and even returned from other functions */
function greet(name) {
  return `Hello, ${name}!`
}
console.log(greet("Arpit"))

// 4.Date : That work with current date and time
let today = new Date()
console.log(today)

// 5.RegExp(Regular Expression) : A special type of object used to work with patterns in string
let pattern = /[A-Za-z]+/  // Matches any word with alphabetic characters
let result = "Hello".match(pattern)
console.log(result)

//Type of in js
console.log(typeof "Hello")   // Output: string
console.log(typeof 42)        // Output: number
console.log(typeof true)      // Output: boolean
console.log(typeof null)      // Output: object
console.log(typeof undefined) // Output: undefined
console.log(typeof Symbol()) // Output: symbol