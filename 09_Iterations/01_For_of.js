// Like all other launguages js had while and for as well as do while loop for iterating
// For Each
const num = [1,2,3,4,5]
for (const index of num) {
    console.log(index)
}
const villan = "Joker Ravan"
for (const string of villan) {
    console.log(string)
}
const name = new Map()     // Map doesn't include the same key pairs again
name.set("first","Arpit")
name.set("last","Dhumane")
name.set("first","Arpit")
console.log(name)
// for (const element of name) {
//     console.log(element)
// }
for (const [key,value] of name) {   // For accessing each value or key of map
    console.log(key)
}

// Object cannot be accessed using forof method as they are not iterables in js
const heroes = {
    "Avengers" :"Ironman",
    "DC" : "Superman",
    "WWE" : "John Cena"
}
for (const hero of heroes) {
    console.log(hero)
}
// There are other methods for them