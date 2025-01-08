const arr = ["Jonny","Chutney","Apple"]
const arr1 = new Array("Arpit","Vansh","Pain")
console.log(arr1)
console.log(arr1.length)
console.log(arr.push("Sam")) // Push the elements at last in an array
console.log(arr)
arr.pop()                    // Pop out the last element
console.log(arr)

const num = [1,2,3,4]        // he join() method also joins all array elements into a string it behaves just like toString()
const num1 = num.join()
console.log(typeof num1)
num.shift()                  // Removes the first element and shift the other elements index to lower index
console.log(num)
num.unshift(23)
console.log(num)             // Methods add the element in array at first and shift the other
const arr3 = num.concat(arr) // Concatenate the two or more arrays
console.log(arr3)
// There is another method for concatenate 
const arr4 = [...num , ...arr]
console.log(arr4)

const myArr = [[12,21],[33,34],[25,26]]
const newArr = myArr.flat()  // To convert the mult-dim array into one dimensional array
console.log(newArr)

newArr.splice(0,2,12) // Add the new element by removing elements from position and the position to be added
console.log(newArr)
// Now new method toSpliced() is used so that original array remains unchanged as it changes the original array before

console.log(newArr.slice(1,3)) // it sliced out the array
// Slice do not changes original array as the splice

// To make an array of single
console.log(Array.from("123456"))
console.log(Array.from({pass: "1234456"})) // it returns empty as js gets confused between key and its value and of which it should make array
