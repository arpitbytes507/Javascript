/* Strings in js can be created by both single and double quote ('',"") or backticks (``) */

let str1 = 'Hello';
let str2 = "World";
let str3 = `Hello, ${str2}!`;
console.log(str1 , str2 , str3)

// String Declaration
/* In js string can be directly declared or by the help of new keyword */
let str = "Arpit"
let name = new String("Arpit")
console.log(str)
console.log(name) /* Note : As with the help of new keyword we declared string as object as it slows execution speed and makes code complicated and produce the unexpected result. For example :*/

let name1 = "Arpit"
let name2 = new String("Arpit")
console.log(name1 == name2)  // true(as both are string)
console.log(name1 === name2) // false(as name1 is string but name2 is object)
let name3 = new String("Arpit")
console.log(name2 == name3)  // false
console.log(name2 === name3) // false(as two objects are not same)


