// Methods In Strings
// All string methods return a new string. They don't modify the original string.
// 1.Length : To know length of string
   let str = "Arpit"
   console.log(str.length) // 5

// 2.To find a character at given position there are 4 methods in js
   // 1.The at(position) Method :
   let name = "Arpit"
   console.log(name.at(1))
   // 2.The charAt(position) Method : 
   let name2 = "Amay"
   console.log(name2.charAt(1))
   // 3.The charCodeAt(position) Method : 
   let name3 = "Arjun"
   console.log(name3.charCodeAt(3))
   // 4.Using property access [] like in array :
   let name4 = "Samay"
   console.log(name4[2])

// 3.There are 3 methods to access substring from a string
   // 1.slice(start, end)
   let name5 = "Arpit"
   console.log(name5.slice(2,4))
   // 2.substring(start, end)
   let name6 = "Parth"
   console.log(name6.substring(0,3))
   // 3.substr(start, length)
   let name7 = "Nobita"
   console.log(name7.substr(0,6))
// both substr and slice methods can take negative parameter as start from end then

// 4.Converting Upper and Lowercase 
   // 1.Uppercase
   let text1 = "Hello World!"
   console.log(text1.toUpperCase())
   // 2.Lowecase
   let text3 = "Hello World!"
   console.log(text3.toLowerCase())

// 5.Concat : It add two or more strings
   let text4 = "Hello"
   let text5 = "World"
   console.log(text4.concat(" ", text5)) // It can be use instead of + operator to add strings in js

// 6.Trim : The trim() method removes whitespace from both sides of a string
   let text6 = "      Hello World!      "
   console.log(text6.trim())
   //There are other methods like trimstart which removes whitespaces from start and trimend removes from end

// 7.Padding : 
   // 1.padStart() : It pads a string with another string (multiple times) until it reaches a given length
   let text = "5"
   console.log(text.padStart(4,"0"))
   // 2.padEnd() : 
   let numb = 5
   let numb1 = numb.toString()
   console.log(numb1.padEnd(4,"0"))

// 8. repeat() : The repeat() method returns a string with a number of copies of a string
   let text9 = "Hello world!";
   console.log(text9.repeat(2))

// 9. replace() : The replace() method replaces a specified value with another value in a string
   let stat = "Replace Number"
   console.log(stat.replace("Replace","Place"))

   /* Note : The replace() method replaces only the first match.If you want to replace all matches, use a regular expression with the /g flag set */
   let stat1 = "Replace Number , Replace Software"
   console.log(stat1.replace(/Replace/g,"Place"))

   /* Note : To replace case insensitive, use a regular expression with an /i flag (insensitive)*/

// 10.split() : A string can be converted to an array with the split() method
   let stat3 = "My name is Arpit"
   console.log(stat3.split(" "))

// 11.includes() : It check whether given substring is present in given string
   let st = "JavaScript is launguage!"
   console.log(st.includes("launguage"))