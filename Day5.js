const arr=Array()
console.log(arr);

const eightXvalues=Array(8).fill('X')
console.log(eightXvalues)

const nineZeroValues=Array(9).fill(0)
console.log(nineZeroValues);

const firstList=[1,2,3]
const secondList=[4,5,6]
console.log(firstList.concat(secondList))

const fruits = ['banana', 'orange', 'mango', 'lemon']
console.log(fruits[fruits.indexOf('mango')]=='banana')
// let index = fruits.indexOf('banana')
// if(index != -1){
//     console.log('This fruit does exist in the array')  
//  } else {
//      console.log('This fruit does not exist in the array')
//  }