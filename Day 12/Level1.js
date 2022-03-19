 let txt='He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let match=txt.match(/\d+/g)
 console.log(match)

// let result=match.reduce((acc,curr)=>
//     parseInt(acc)+parseInt(curr))
// console.log(result)

points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
sortedPoints =  [-4, -3, -1, -1, 0, 2, 4, 8]
distance = 12



let txt2='The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'

let match2=txt2.match(/\d+/g)
console.log(match2)

let extracted=match2.map(x=>parseInt(x))
console.log(extracted)

const distBetweenTwo=(arr)=>{
    let dist=arr[arr.length-1]-[0]
    return dist
}
console.log(distBetweenTwo(extracted))


let pattern=(/^[A-Za-z_$][_$A-Za-z0-9]*$/g)
let is_valid_variable=(str)=>{
    console.log(pattern.test(str))
}

is_valid_variable('first_name')
is_valid_variable('first-name') 
is_valid_variable('1first_name') 
is_valid_variable('firstname')
