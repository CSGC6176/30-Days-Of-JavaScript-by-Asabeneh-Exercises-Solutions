//Map-Filter-Reduce
const arr=[5,6,17,8,9]


function double (x){
    return x*2
}

//Method 1
// const output=arr.map(double)
// console.log(output)

//Method 2
// const output2=arr.map(
//     function double (x){
//         return x*2
//     }


// console.log(output2)

// Using arrow function
const output3=arr.map(
      (x)=>
       x*2
)
console.log(output3)

//Filter
function isOdd(x){
    return x % 2;
}

const filter=arr.filter(isOdd);

console.log(filter)


//Reduce

const reduce=arr.reduce(function (max,curr){
    if(curr>max){
       max=curr
    }
    return max;
},0
)

console.log(reduce)

