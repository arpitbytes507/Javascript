const user = {
    username : "Arpit",
    age:18,
    getname : function(){
        // console.log(`name is ${this.username}`)
        console.log(this)  // if only this is print then the whole object with respect to current context is print
    }
}
console.log(user.username)
console.log(user.getname())
console.log(this)  // if we print this globally then it will represent an empty object in node but will give "window" in console

// constructor
function user1(name,age){
    this.name=name
    this.age=age
    return this
}
const user2 = new user1("Amay",20)
const user3 = new user1("P",23)
console.log(user2)
console.log(user3.constructor)
// constructor creates the new copy and we can manipulate it