// function person(name,age){
//     this.name=name
//     this.age=age
// }
// person.prototype.greet=function(){
//     console.log(`name is : ${this.name}`)
// }
// const person1 = new person("Arpit", 30);
// person1.greet();

// call method
let person = {
    name: "Arpit",
    greet: function() {
      console.log("Hello, " + this.name);
    }
  }
  let anotherPerson = {
    name: "Dhumane"
  }
  person.greet.call(anotherPerson)
  