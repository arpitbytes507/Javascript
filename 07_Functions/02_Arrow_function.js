const name = {
    firstname : "Arpit",
    age : 19,
    id : function(){
        console.log(`${this.firstname} welcome`)
        // console.log(this)
    }
}
console.log(name.id())
name.firstname = "Amay"
console.log(name.id())
console.log(this)
// this can be used in the object context not with function

// Arrow Function
const add = (num1 , num2) => {   // Explicit return
    return num1+num2
}
console.log(add(4,5))

const sum = (num1,num2) => (num1+num2) // Implicit return
console.log(sum(5,5))

const nam = (firstname) => ({username : "Anand", age : 2})
console.log(nam())
// when we use the arrow function we do not use the function keyword