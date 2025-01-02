// Type conversion in Javascript : Js allows both explicit and implicit conversions
// 1.Implicit type conversion(Coercion) : JS automatically converts values between types when necessary
console.log(5 + "5") // Output:"55" (Number is coerced to a string)
console.log("5" - 2) // Output:3 (String is coerced to a number)

// 2.Explicit type conversion(Casting) : You can manually convert between types using functions like:String(),Number(),Boolean()
let str = "123"
let num = Number(str)  // Converts string to number
console.log(num)     // Output: 123

let val = 0
let boolVal = Boolean(val)  // Converts 0 to false
console.log(boolVal)

let s = "33a"
let valuenumber = Number(s)
console.log(valuenumber)   //output will be NaN