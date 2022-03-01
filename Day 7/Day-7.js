/* A function can be declared or created in couple of ways:

Declaration function
Expression function
Anonymous function
Arrow function */


function square(){
    let num=2;
    let sq=num*num
    console.log(sq)
}
square()

function addTwoNumbers(){
    let a=30;
    let b=50;
    let sum=a + b ;
    console.log(sum)
}
addTwoNumbers()

function addTwoNumbers(){
    let a=30;
    let b=50;
    let sum=a + b ;
    return sum
}
console.log(addTwoNumbers())


// function areaOfCircle(radius){
//     const pi=3.14
//     let area=pi*radius*radius;
//     return area
// }

// console.log(areaOfCircle(10))


//Two Params
function sumOfTwo(n1,n2){
    let sum=n1+n2;
    return sum
}

console.log(sumOfTwo(5,6))

//Three Params

function sumArrayValues(arr){
    let sum=0;
    for(let i of arr){
        sum+=i
        
    }
    return sum
}

const  numArray=[56,6,8,3,66]

console.log(sumArrayValues(numArray))

const areaOfCircle=(radius) =>{
    let area=3.14*radius*radius
    return area;
}
console.log(areaOfCircle(10))

//Unlimited No of Parameters

const sumAllNums= (...args)=>{
    let sum=0;
    for(let i of args){
        sum+=i
        
    }
    return sum
}

console.log(sumAllNums(2,3,4,5))
console.log(sumAllNums(2,3,4,5,9,55))
console.log(sumAllNums(56,6,8,3,66))


/* Anonymous Function
Anonymous function or without name */

const anonymousFun=function(){
    console.log('I am an anonymous function and my value is stored in anonymousFun')
}

console.log(anonymousFun())

/* Expression Function
Expression functions are anonymous functions. 
After we create a function without a name and we assign it to a variable. 
To return a value from the function we should call the variable. Look at the example below. */

const square1= function(n){
    return n*n
}
console.log(square(2))

/* Self Invoking Functions
Self invoking functions are anonymous functions which do not need to be called to return a value. */

// (function(n) {
//     console.log(n*n)   
// })(2)

// let squaredNum=(function(n){
//     return n*n
// })(10)

// console.log(squaredNum)

const printFullName=(firstName,lastName) => `${firstName} ${lastName}`
console.log(printFullName('Govind','Chauhan'))

