// let myPromise = new Promise(function(resolve, reject) {
//     let success = true; 
    
//     setTimeout(() => {
//       if (success) {
//         resolve("Operation succeeded!")
//       } else {
//         reject("Operation failed!");
//       }
//     }, 2000)
//   });
  
// myPromise.then(function(result) {
//       console.log(result)
// })
// .catch(function(error) {
//       console.log(error)
// });
  
// let promise = new Promise(function(resolve,reject){
//     let x = 2+3
//     if(x==4){
//         resolve("operation successfull")
//     }
//     else{
//         reject("Not succeded")
//     }
// })
// promise.then(function(result) { // parameter passed in function will have the same data as the resolve or reject
//       console.log(result)
// })
// .catch(function(error) {
//       console.log(error)
// })
// .finally(()=>{
//     console.log("If print then succedded else not")
// })

function fetchdata(){
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Data fetched"),2000)
    })
}
async function getdata() {
    try{
        let result = await fetchdata()
        console.log(result)
    }catch(error){
        console.log("Error: ",error)
    }
}
getdata();