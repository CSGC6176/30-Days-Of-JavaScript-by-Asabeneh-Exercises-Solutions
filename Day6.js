for(let i=100;i>0;i--){
    console.log(i)
}

for(let i = 7;i<=20;i++){
    console.log(`${i} * ${i}  ${i * i}`)
}

const countries=['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr=[]
for(let i=0;i<countries.length;i++){
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

SUm of number

const numbers=[1,2,3,4,5]
let sum =0;
for(let i=0;i<numbers.length;i++){
    sum=sum+numbers[i]
}
console.log('Sum of numbers'+sum)

const numbers=[1,2,3,4,5]
const newArr=[]
for(let i=0;i<numbers.length;i++){
    newArr.push(numbers[i]**2)
}
console.log(newArr)

while loop
let i=0
while(i<=5){
    console.log(i)
    i++
}

Do-while loop
let i=0;
do{
    console.log(i)
    i++
}
while(i<=5)


For of loop
for (const element of arr) {
    // code goes here
  }


let sum=0
  const numbers = [1, 2, 3, 4, 5]
  for (const num of numbers) {
        console.log(num)      
        console.log(num * num )   
        console.log(sum=sum+num)   
  }

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  for (const techs of webTechs) {
     // console.log(techs.toUpperCase())
      console.log(techs[0])
  }

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(const country of countries){
  newArr.push(country.toUpperCase())
}

console.log(newArr)


for(let i=0;i<=5;i++){
    if(i==3)
    break
    console.log(i)
}

for(let i=0;i<=5;i++){
    if(i==3)
    continue
    console.log(i)
}

