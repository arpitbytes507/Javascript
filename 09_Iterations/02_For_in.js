const num = [1,2,3,4,5]     // it prints index as key value for array is index
for (const key in num) {
    console.log(key)
}
for (const key in num) {
    console.log(num[key])
}
const heroes = {               // for in can iterates the object keys but not maps as not iterables
    "Avengers" :"Ironman",
    "DC" : "Superman",
    "WWE" : "John Cena"
}
for (const value in heroes) {
    console.log(value)
}
for (const value in heroes) {
    console.log(heroes[value])
}