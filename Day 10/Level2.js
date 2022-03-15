let a=[]
for(i=0;i<10;i++){
    a.push(i)
}

console.log(a)

let b=[]
for(i=5;i<12;i++){
    b.push(i)
}

console.log(b)


let c=[...a,...b]

const A=new Set(a)
const B=new Set(b)
const C=new Set(c)
console.log(C)


let intersection=a.filter((num)=>B.has(num))
let inter = new Set(intersection)
console.log(inter)

let d=a.filter((num)=>!B.has(num))
let diff = new Set(d)
console.log(diff)