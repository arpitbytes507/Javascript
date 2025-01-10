const num = 2;
if (num<3) {
    console.log("Num is samll")
}
else{
    console.log("Num is large")
}
// in switch case after matching cases if found the case then it gets executed but not default till
// false value : 0,-0,false,NaN,Big int 0n,"",null,undefined
// truth value :  "0","false","",[],{},function(){}
const obj = {
}
if(Object.keys(obj).length===0){
    console.log("Object is empty");
}
// Nullish coalescing operator(??):null undefined
// let num1 = null ?? 10;
let num1 = 10 ?? 20;
console.log(num1);
// it is due to the traffic of various output from databases