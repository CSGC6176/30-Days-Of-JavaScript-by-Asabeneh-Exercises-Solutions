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

// console.log(itCompanies.includes('Facebook'))
// console.log(itCompanies.includes('Dropbox'))
// // const find=[];
// // for(let i=0;i<itCompanies.length;i++){
// //     //if(itCompanies[i].toString().match(o/gi).length>2){
// //       //  if(itCompanies[i]==itCompanies[i].toString().match(/o/gi))
// //     console.log(find[i]=icotoString().match(/[o]+/gi))
// //     //}
// // }


console.log(itCompanies.sort());
console.log(itCompanies.reverse());

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(-3))
console.log(itCompanies.slice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length/2)]),itCompanies.indexOf(itCompanies[Math.ceil(itCompanies.length/2)])))


console.log(itCompanies.shift())
//Remove the middle IT company or companies from the array
console.log(itCompanies.splice(itCompanies.indexOf(itCompanies[Math.floor(itCompanies.length/2)]),1))
console.log(itCompanies)

//Remove the last IT company from the array
console.log(itCompanies.splice(itCompanies.indexOf(itCompanies[itCompanies.length-1]),1))
console.log(itCompanies)

//Remove all IT companies
console.log(itCompanies.splice())


const numbers = [1, 2, 3, 4, 5]
console.log(numbers.splice())    
console.log(numbers)  

//Level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24,98];
console.log(ages.sort());
console.log(Math.min(...ages))
console.log(Math.max(...ages))
let maximum=ages[0];
let minimum=ages[0]

    for(let i=0;i<ages.length;i++)
        // if(maximum<ages[i]){
        //     maximum=ages[i]
            
        // }
        
        // console.log('Maximum ' +maximum)

        if(minimum>ages[i]){
            minimum=ages[i]
        }
        console.log('Minimum' +minimum)


console.log(ages.sort().length)
    
let median;


let data=[4, 17, 77, 25, 22, 23, 92, 82, 40, 24, 14, 12, 67, 23, 29]

let sort=data.sort(function(a,b){return a-b});
console.log(sort)
var length=sort.length
let half=Math.floor(length/2) 
if(length%2==0){
    median=Math.floor((sort[half]+(sort[half-1]))/2)}
else if(length%2!=0) 
   median=Math.floor(sort[half])

console.log(median)
 let avg=0;
      for(let i=0;i<ages.length;i++){
          avg=avg+ages[i]/ages.length
      }
 console.log(avg)

let range=Math.max(...ages)-Math.min(...ages);
console.log(range)

let value1=Math.abs(Math.min(...ages)-avg)
let value2=Math.abs(Math.max(...ages)-avg)



value1>value2?console.log(value1):console.log(value2)