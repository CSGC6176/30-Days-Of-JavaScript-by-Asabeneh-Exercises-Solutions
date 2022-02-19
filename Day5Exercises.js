const arr=[];
const arr1=[1,2,3,4,5,6]
const fruits=['Apple','banana','Mango','Watermoelon','Strrawberry']
console.log(arr1)
console.log(arr1.length)
console.log(arr1[0],arr1[arr1.length/2],arr1[arr1.length-1])
console.log(fruits)

const mixedDataTypes=[1,2,3,'Apple','Banana',true,false,null
,{country:'India',city:'Mumbai'},{skills:['Java','SpringBoot','Angular','MySQL']}]

console.log(mixedDataTypes.length)

const itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[Math.floor(itCompanies.length/2)],itCompanies[itCompanies.length-1])
console.log(itCompanies.toString())
console.log(itCompanies.sort().toString().toUpperCase())
console.log(itCompanies.toString()+ ' are big IT companies.')

console.log(itCompanies.includes('Facebook'))
console.log(itCompanies.includes('Dropbox'))
//const find=[];
// for(let i=0;i<itCompanies.length;i++){
//     //if(itCompanies[i].toString().match(o/gi).length>2){
//       //  if(itCompanies[i]==itCompanies[i].toString().match(/o/gi))
//     console.log(find[i]=icotoString().match(/[o]+/gi))
//     //}
// }


console.log(itCompanies.sort());
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(-3))
console.log(itCompanies.slice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length/2)]),itCompanies.indexOf(itCompanies[Math.ceil(itCompanies.length/2)])))


//console.log(itCompanies.shift())
//console.log(itCompanies.shift(itCompanies.length/2))