let x = 10
let y = 20
console.log(x + y)
// The toString() method returns a number as a string
let z = 123
console.log(x.toString())
// toExponential() returns a string, with a number rounded and written using exponential notation
let a = 9.656
console.log(a.toExponential(2))
console.log(a.toExponential(4))
// toFixed() returns a string, with the number written with a specified number of decimals
let b = 9.256
console.log(b.toFixed(0))
console.log(b.toFixed(2))
// toPrecision() returns a string, with a number written with a specified length
let c = 21.656
console.log(c.toPrecision())
console.log(c.toPrecision(2))