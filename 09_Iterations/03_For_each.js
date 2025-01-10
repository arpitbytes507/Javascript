const num = [1,2,3,4,5]
num.forEach(element => {
    console.log(element);
});
num.forEach(function(item){
    console.log(item)
});
num.forEach((item,index,num)=>{
    console.log(item,index,num);
})

// const mobile = [
//     {
//         Model : "X200",
//     },
//     {
//         Model : "GT7"
//     }
// ]
// mobile.forEach(item =>{
//     console.log(item.Model)
// })

// For each do not return any values
// const mobile = [
//     {
//         Model : "X200",
//     },
//     {
//         Model : "GT7"
//     }
// ]
// const m = mobile.forEach(item =>{
//     console.log(item.Model)
// });
// console.log(m)
// use filter if return needed
const mobile = [
    {
        Model : "X200",
    },
    {
        Model : "GT7"
    }
]
mobile.filter(item =>{
    console.log(item.Model)
})
const num1 = [1,2,3,4,5,6,7,7]
const vm = num1.map((nums)=> nums*10).map((nums)=>nums+1).filter((nums)=> nums>=20)
console.log(vm)

const n = [1,2,4]
// const total = n.reduce(function(value,current){
//     return value+current
// },0)
// console.log(total)
const total = n.reduce((value,current) => value+current,0)
console.log(total)