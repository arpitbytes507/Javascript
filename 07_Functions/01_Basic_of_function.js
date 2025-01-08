function division(num1 , num2){
    console.log(num1/num2)
}
console.log("Division : ",division(4,2)) // it is undefined as the value is not return by function

function division(num1 , num2){
    let num3 = (num1/num2)
    return num3
    console.log("2")    // After writing the return statement in function the remaining part does not get executed
}
console.log("Division : ",division(4,2))

function customer(id1,id2,...id3){    // when the arguments amount is not known then use  rest operator (...)
    return id1,id3
}
console.log(customer(1,2,3,4,5,6))

const name = {
    firstname : "Arpit",
    lastname : "Dhumane"
}
function object(obj){
    console.log(`The first name is ${obj.firstname} and last name is ${obj.lastname}`)
}
console.log(name)
object({
    firstname : "Amay",
    lastname : "Chaple"
})

const arr = [10,20,24,34,56]
function returnarr(getarr){
    return getarr[0]
}
console.log(returnarr(arr))