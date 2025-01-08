// 1.Object literals
const Sym = Symbol("mysim")
const person = {"name" : "Arpit", age: 18 , email:"arpit@gmail.com",[Sym] : "mysim"}
console.log(person)
console.log(person.email)   // Dot notation
console.log(person["name"]) // One way but if the identifier is not speccify then use bracket notation
console.log(typeof person["Symbol"]) 
// 2.By using new keyword (Singleton)
const mysym = Symbol("Symbol")
const person1 = new Object()
person1.name = "A"
person1.age = 12
person1.Symbol = "mysim"
console.log(person1)
console.log(typeof person1.Symbol)

person1.email = "chatgpt@.com"
// Object.freeze(person1)         // Use to freeze the objects
person1.email = "shudh@gmail.ocm"
console.log(person1)

person1.print = function(){
    console.log(`Hello, ${this.name}`) // this is used to acces the objects memebers
}
console.log(person1.print())