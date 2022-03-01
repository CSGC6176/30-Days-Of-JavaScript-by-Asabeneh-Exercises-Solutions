//Level 1

const { stopped } = require("prompt")

function fullName(){
   let fullName='Jane Doe'
   return fullName
}   
console.log(fullName())


function fullName(firstName, lastName){
    let fullName=firstName+" "+lastName
    return fullName
}

console.log(fullName('Jane','Doe'))


function addNumber(num1,num2){
    let sum=num1+num2
    return sum
}

console.log(addNumber(34,56))

function areaOfRectangle(length,width){
    let area=length * width
    return area
}
console.log(areaOfRectangle(4,5))

function perimeterOfRectangle(length,width){
    let perimeter=2 * (length + width)
    return perimeter
}
console.log(perimeterOfRectangle(4,5))


function volumeOfRectPrism(length,width,height){
    let volume=length*width*height
    return volume
}
console.log(volumeOfRectPrism(4,5,6))


function areaOfCircle(r){
    let areaC=3.14*r*r
    return areaC
}

console.log(areaOfCircle(5))

function circumOfCircle(r){
    let circumference=2*3.14*r
    return circumference
}
console.log(circumOfCircle(54))


function density(mass,volume){
    let density = mass/volume
    return density
}
console.log(density(63,9))

function speed(Tdistance,Time)
{
    let speed=Tdistance/Time
    return speed
}

console.log(speed(54,7))


function weight(mass,gravity){
    let weight = mass * gravity
    return weight
}

console.log(weight(54,6))

function convertCelciusToFahrenheit(oC){
    let oF=(oC*9/5) + 32
    return oF
}

console.log(convertCelciusToFahrenheit(37.5))

function calculateBMI(weight,height){
    let bmi = weight/(height*height)
    let category=''
    if(bmi<18.5)
        category='Underweight'
    else if(bmi>=18.5 && bmi<=24.9)
        category='Normal weight'
    else if(bmi>=25 && bmi<=29.9)
        category='Overweight'
    else if(bmi>=30)
        category='Obese'
    
    return category
}


console.log(calculateBMI(67,1.65))


function checkSeason(month){
let season=''
if(month ==='September ' || month ==='October' || month ==='November'){
        season='Autumn'
        }
    else if(month === 'December ' || month === 'January' || month === 'February'){
        season='Winter'
        }
    else if(month === 'March ' || month === 'April' || month === 'May'){
        season='Spring'
        }
    else if(month=== 'June ' || month === 'July' || month === 'August'){
        season='Summer'
        }
    else {
        season='Not a valid month'
        }
    return season
}

console.log(checkSeason('May'))

const findMax=(...arr)=>{
    let maximum=arr[0]
    for(let i=0;i<arr.length;i++ ){
        if(maximum<arr[i]){
            maximum=arr[i]
        }
    
    }
    return maximum
}

// function findMax(arr){
//     let maximum=arr[0]
//     for(let i=0;i<arr.length;i++ ){
//         if(maximum<arr[i]){
//             maximum=arr[i]
//         }
    
//     }
//     return maximum

// }

// let arr=[0, 10, 5]
// console.log(findMax(arr))
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

const solveLinEquation=(x,y,a,b,c)=>{
    // let rhs=0
    // let eq=0
    if(x==0){
        return `y = ${-c/b}`
    }
    else if(y==0){
        return `x = ${-c/a}`
    }
}

console.log(solveLinEquation(2,0,2,3,5))


const solveQuadEquation= (a,b,c)=>{
    let root1,root2
    let d=(b*b)-(4*a*c)
    if(d>0){
        let root1=(-b+Math.sqrt(d))/(2*a)
        let root2=(-b-Math.sqrt(d))/(2*a)
        return `{${root1},${root2}}`
    }
    else if (d == 0) {
        root1 = root2 = -b / (2 * a);
        return `{${root1},${root2}}`
}}

console.log(solveQuadEquation()) // {0}
console.log(solveQuadEquation(1, 4, 4)) // {-2}
console.log(solveQuadEquation(1, -1, -2)) // {2, -1}
console.log(solveQuadEquation(1, 7, 12)) // {-3, -4}
console.log(solveQuadEquation(1, 0, -4)) //{2, -2}
console.log(solveQuadEquation(1, -1, 0)) //{1, 0}

const printArray = (...arr)=>{
    return arr
}

console.log(printArray(1,2,3,4))

const showDateTime =() =>{
    let date=new Date()
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`
}

console.log(showDateTime())

const swapValues=(x,y)=>{
    let temp = x;
    x=y;
    y= temp;
    return `x => ${x}, y => ${y}`
    
}
console.log(swapValues(3, 4)) 
console.log(swapValues(4, 5))

const reverseArray=(...arr1)=>{
    let reversedArray=[]
    for(let i=arr1.length-1;i>=0;i--){
       reversedArray.push(arr1[i])
    }
    return reversedArray
}

console.log(reverseArray(1, 2, 3, 4, 5))

const capitalizeArray=(...cpa)=>{
    let capitalizedArray=[]
    for(let i=0;i<cpa.length;i++){
        capitalizedArray.push(cpa[i].toUpperCase())
    }
    return capitalizedArray
}


console.log(capitalizeArray("HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"))

const addItem=(item)=>{
    let arrNew=['A', 'B', 'C',1, 2, 3, 4, 5]
        arrNew.push(item)
return arrNew
}


console.log(addItem(90))

const removeItem=(index)=>{
    let arrNew=['A', 'B', 'C',1, 2, 3, 4, 5]
        arrNew.splice(index,1)
return arrNew
}


console.log(removeItem(3))

const sumOfNumbers=(...args)=>{
    let sum=0;
    for(let i of args){
        sum+=i
    }
    return sum
}

console.log(sumOfNumbers(1, 2, 3, 4, 5))

const sumOfOdds=(...args)=>{
    let sum=0;
    for(let i of args){
        if(i%2!=0)
            sum+=i
    }
    return sum
}

console.log(sumOfOdds(1, 2, 3, 4, 5))

const evensAndOdds=(num)=>{
    let even=0;
    let odd=0;
    for(let i=0;i<=num;i++){
        if(i%2==0)
            even++
        else
            odd++

    }
    return `even = ${even}  odd= ${odd}`
}

console.log(evensAndOdds(100))


const randomUserIp =()=>{
    
    return `${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}.${Math.floor(Math.random()*255)}`
}

console.log(randomUserIp())

const randomMacAddress=()=>{
    let hexChars='012456abcdefABCDEF'
    let p1=''
    let p2=''
    let p3=''
    let p4=''
    let p5=''
    let p6=''
    for(i=0;i<2;i++){
        p1 += hexChars.charAt(Math.floor(Math.random()*hexChars.length))
        p2 += hexChars.charAt(Math.floor(Math.random()*hexChars.length))
        p3+=hexChars.charAt(Math.floor(Math.random()*hexChars.length))
        p4+=hexChars.charAt(Math.floor(Math.random()*hexChars.length))
        p5+=hexChars.charAt(Math.floor(Math.random()*hexChars.length))
        p6+=hexChars.charAt(Math.floor(Math.random()*hexChars.length))
    }
    return `${p1}:${p2}:${p3}:${p4}:${p5}:${p6}`
}

console.log(randomMacAddress())

const randomHexaNumberGenerator=()=>{
    let generatedNo='';
    let hex='012456abcdefABCDEF'
    for(let i=0;i<6;i++){
     generatedNo+=hex.charAt(Math.floor(Math.random()*hex.length))
    }
    return generatedNo

}

console.log(randomHexaNumberGenerator())

const userIdGenerator=()=>{
    let randomchar='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let generatedId=''
    for(i=0;i<7;i++){
     generatedId+=randomchar.charAt(Math.floor(Math.random()*randomchar.length))
 }
 return generatedId
}
console.log(userIdGenerator())


console.log('--------------------')
const userIdGeneratedByUser=()=>{  
    let generatedIds=[]
    let randomchar='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let num=6
    let chars=3
    for(let i=0;i<num;i++){
        generatedIds[i]=""
        for(let j=0;j<chars;j++){
          generatedIds[i]+=randomchar.charAt(Math.floor(Math.random()*randomchar.length))
        }
    }
   console.log(generatedIds)
   for(let k of generatedIds){
       console.log(k)
   }
}

userIdGeneratedByUser()

rgbColorGenerator= ()=>{
    console.log(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)
}

rgbColorGenerator()

arrayOfHexaColors=()=>{
    let hexaArray=[]
    let hex='012456abcdefABCDEF'
    for(i=0;i<Math.floor(Math.random()*100);i++){
        hexaArray[i]="#"
        for(let j=0;j<6;j++){
            hexaArray[i]+=hex.charAt(Math.floor(Math.random()*hex.length))
           }
        }
        console.log(hexaArray)
}

arrayOfHexaColors()

arrayOfRgbColors=()=>{
    let rgbColorArr=[]
    for(let i=0;i<Math.floor(Math.random()*100);i++){
        rgbColorArr[i]=''
        rgbColorArr[i]+=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    }
    console.log(rgbColorArr)
}
arrayOfRgbColors()

convertHexaToRgb =(color)=>{
    r=color.slice(1,3)
    g=color.slice(3,5)
    b=color.slice(5)
    console.log(`rgb(${parseInt(r,16)},${parseInt(g,16)},${parseInt(b,16)})`)
}

convertHexaToRgb('#f96123')

convertRgbToHexa =(r,g,b)=>{
    r=parseInt(r).toString(16)
    g=parseInt(g).toString(16)
    b=parseInt(b).toString(16)

    if (r.length == 1)
    r = "0" + r;
    if (g.length == 1)
    g = "0" + g;
    if (b.length == 1)
    b = "0" + b;

 console.log("#" + r + g + b)
}

convertRgbToHexa(254,107,0)

generateColors =(colorType,no)=>{
    if(colorType=='hexa'){
        let hexaArray=[]
        let hex='012456abcdefABCDEF'
        for(i=0;i<no;i++){
            hexaArray[i]="#"
            for(let j=0;j<6;j++){
                hexaArray[i]+=hex.charAt(Math.floor(Math.random()*hex.length))
               }
            }
            console.log(hexaArray)

    }
    else if(colorType=='rgb'){
        let rgbColorArr=[]
        for(let i=0;i<no;i++){
        rgbColorArr[i]=''
        rgbColorArr[i]+=`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    }
    console.log(rgbColorArr)

    }
}

generateColors('hexa',3)
generateColors('hexa', 1)
generateColors('rgb', 3)
generateColors('rgb', 1)

shuffleArray=(...arr)=>{
    for(i=arr.length-1;i>0;i--){
        const j=Math.floor(Math.random()*(i+1));
        const temp=arr[i];
        arr[i]=arr[j]
        arr[j]=temp
    }
    console.log(arr)
}

shuffleArray(1,2,3,4,5,6,7,8,9,10)


factorial=(num)=>{
    let fact=1
    if(num==0 || num==1)
        fact=1
    else{
        for(i=num;i>0;i--){
        fact*=i
    }
    console.log(fact)
}
}
factorial(5)

isEmpty=(val)=>{
    if(val===undefined){
        return 'Empty'
    }
    else{
        return 'Not Empty'
    }
}

console.log(isEmpty(1))

// sum=(...args)=>{
//     let summ=0
//     for(let i of args){
//         summ+=i
//     }
//     return summ
// }

// console.log(sum(112))


sum = (...args) => {
    let sum = 0;
    args.forEach(function (arg) {
        sum += arg
    })
    return sum;
}

console.log(sum(1,2,3,4))

sumOfArrayItems=(...arr)=>{
        let sum=0
        for (let i of arr){
            if(typeof i ===  'number'){
                sum+=i
            }
            else{
                sum='The input is of string type'
                arr[i]+=''
            
            }
        }
        return sum
}

console.log(sumOfArrayItems(1,2,3,4,5,6))
console.log(sumOfArrayItems('1',2,'3',4,5,'7',8))
console.log(sumOfArrayItems("HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"))

average=(...arr)=>{
    let sum=0
        for (let i of arr){
            if(typeof i ===  'number'){
                sum+=i
            }
            else{
                sum='The input is of string type'
                arr[i]+=''
            
            }
        }
        return sum/arr.length

}
console.log(average(1,2,3,4,5,6))
console.log(sumOfArrayItems('1',2,'3',4,5,'7',8))

modifyArray =(arr)=>{
        if(arr.length>=6){
            for(let i=0;i<arr.length;i++){
                if(i==4){
                    arr[i]=arr[i].toUpperCase()
                }
        }
        return arr
    }
    else{
            return `Not Found`
        }
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

isPrime=(num)=>{
    for(i=2;i<num;i++){
        if(num%i===0 && num>1){
            return `${num} is  not a prime number`
        }
        else{
            return `${num} is   a prime number`
        }
    }

}

console.log(isPrime(23))



checkUnique=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j){
        if(arr[i]===arr[j]){
            return `not unique`
        }
        else{
            return `unique`
        }

}
        }
    }
}

console.log(checkUnique([1,1,2,5,6]))
console.log(checkUnique([1,2,3,4,5,6]))

checkSameDataType=(arr)=>{
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(i!==j){
        if(typeof arr[i]==typeof arr[j]){
            return `same datatype`
        }
        else{
            return `different datatype`
        }

}
        }
    }
}

console.log(checkSameDataType([1,1,2,5,6]))
console.log(checkSameDataType([1,'2',3,4,5,6]))

isValidVariable=(variable)=>{
    if(variable.match(/^[a-zA-Z_$][a-zA-Z_$0-9]*$/gi))
    {
        return `valid variable`
    }
    else{
        return `invalid variable`
    }
}
console.log(isValidVariable('$abc'))

sevenRandomNumbers=()=>{
    let arr=[]
    for(i=0;i<7;i++){
        arr.push(Math.floor(Math.random()*10))
    }
    return arr
}

console.log(sevenRandomNumbers())



reverseCountries=()=>{
    let countries = ["nigeria", "U.S.A", "italy", "canada", "lebanon"]
    return countries.reverse()
}

console.log(reverseCountries())