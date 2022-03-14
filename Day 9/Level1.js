/*1.
The forEach() method calls a function for each element in an array.
*/

/* 
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
map() does not change the original array.
*/

/*
The filter() method creates a new array filled with elements that pass a test provided by a function.
The filter() method does not execute the function for empty elements.
The filter() method does not change the original array.
*/

/*
The reduce() method executes a reducer function for array element.
The reduce() method returns a single value: the function's accumulated result.
The reduce() method does not execute the function for empty array elements.
The reduce() method does not change the original array.

*/

//A callback funtion is function passed onto other function as a parameter



const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','England']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const print1=countries.forEach(cnt=>console.log(cnt))
const print2=names.forEach(nm=>console.log(nm))
const print3=numbers.forEach(num=>console.log(num))
const print4=countries.map(upp=>upp.toUpperCase())
console.log(print4)
const print5 =countries.map(ctr=>ctr.length)
console.log(print5)
const print6=numbers.map(num=>Math.pow(num,2))
console.log(print6)

const print7=names.map(name=>name.toUpperCase())
console.log(print7)

const print8=products.map(mapping=>`${mapping.product}:${mapping.price}`)
console.log(print8)


const print9 =countries.filter(country=>country.toLowerCase().includes('land'))
console.log(print9)

const print10=countries.filter(country=>country.length==6)
console.log(print10)

const print11=countries.filter(country=>country.length>=6)
console.log(print11)

const print12=countries.filter(country=>country.startsWith('E'))
console.log(print12)

const print13=products.filter(product=>product.price>0)
console.log(print13)

const getStringLists = (arr)=>arr.filter(str=>typeof str==='string')
console.log(getStringLists([1,2,'A','B',4]))

const num=numbers.reduce((acc,curr)=>acc+curr,0)
console.log(num)

const concatenate=countries.reduce((acc,curr)=>acc+curr,'Estonia')
console.log(concatenate)

const checkNameLength=names.some(name=>name.length>=7)
console.log(checkNameLength)


const check=countries.every(country=>country.includes('land'))
console.log(check)

//find returns the first element which satisfies the condition
//findIndex returns the first index elemnet which satisfiy the condition

let find1=countries.find(country=>country.length===6)
console.log(find1)

let find2=countries.findIndex(country=>country.length===6)
console.log(find2)

let find3=countries.findIndex(country=>country==='Norway')
console.log(find3)

let find4=countries.findIndex(country=>country==='Russia')
console.log(find4)

