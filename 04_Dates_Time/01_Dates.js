// JavaScript Date Objects let us work with dates
const d = new Date()
console.log(d)
const date = new Date("2024-01-06")
console.log(date)
// JavaScript counts months from 0 to 11
const newdate = new Date(2018, 11, 24, 10, 33, 30, 0)
console.log(newdate)
console.log(newdate.toString())
console.log(newdate.toLocaleString())
// 6 numbers specify year, month, day, hour, minute, second
// 5 numbers specify year, month, day, hour, and minute
// 4 numbers specify year, month, day, and hour
// 3 numbers specify year, month, and day
// 2 numbers specify year and month