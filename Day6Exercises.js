// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
//Using For Loop
for(let i=0;i<=10;i++){
    console.log(i)
}

//Using While Loop
let i=0
while(i<=10){
    console.log(i)
    i++
}

do{
    console.log(i)
    i++
}
while(i<=10)


//2.Iterate 10 to 0 using for loop, do the same using while and do while loop
//Using For Loop
for(let i=10;i>0;i--){
   console.log(i)
}

// //Using While Loop
let i=10
while(i>0){
     console.log(i)
     i--
}

 do{
     console.log(i)
     i--
 }
while(i>0)

//3.Iterate 0 to n using for loop

let n=50
for(let i=0;i<=n;i++){
    console.log(i)
}

/*4.Write a loop that makes the following pattern using console.log():

    #
    ##
    ###
    ####
    #####
    ######
    #######

*/
let star='\n'
for(let i=0;i<7;i++){
    for(let j=0;j<=i;j++){
        star +='# '
    }
    star +='\n'
}
console.log(star)

for(let i=0;i<=7;i++){
    console.log('# '.repeat(i))
}

/* 
5. Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
 */

for(let i=0;i<=10;i++){
    console.log(`${i} x ${i} = ${i*i}`)
}

/* 6.Using loop print the following pattern

i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000 */

console.log("i\ti^2\ti^3")
for(let i=0;i<=10;i++){
    console.log(i+'\t'+i**2+'\t'+i*i*i)
}

// 7.Use for loop to iterate from 0 to 100 and print only even numbers

for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i)
    }
}

// 8.Use for loop to iterate from 0 to 100 and print only odd numbers


for(let i=0;i<=100;i++){
    if(i%2!=0){
        console.log(i)
    }
}

//9.Use for loop to iterate from 0 to 100 and print only prime numbers

for(let i=2;i<=100;i++){
    let isprime=true;
    for(let j=2;j<i;j++){
        if(i%j===0 && i!==j){
            isprime=false
    }
    }
    if(isprime===true){
        console.log(i)
    }
}


// 10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum=0
for(let i=0;i<=100;i++){
    sum+=i
}
console.log(sum)

// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumeven=0;
let sumodd=0;
//let sumtotal;
for(let i=0;i<=100;i++){
    if(i%2==0){
         sumeven+=i
    }
    else
        sumodd+=i
    
 }
 console.log('The sum of all evens from 0 to 100 is ' +sumeven+'. And the sum of all odds from 0 to 100  is ' +sumodd+ '.')


//12.  Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let sumeven=0;
let sumodd=0;
let arrNew=[];
for(let i=0;i<=100;i++){
   if(i%2==0){
         sumeven+=i
         
   }
    else
         sumodd+=i
            
 }
arrNew.push(sumeven)
arrNew.push(sumodd)
console.log(arrNew)


// 13. Develop a small script which generate array of 5 random numbers

let newArr=[]
for(i=0;i<5;i++){
    newArr.push(Math.random()*i)
}
// console.log(newArr)

// 15. Develop a small script which generate a six characters random id:

let randomchar='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let generatedId=''
for(let i=0;i<5;i++){
    generatedId+=randomchar.charAt(Math.floor(Math.random()*randomchar.length))
}
console.log(generatedId)

// 16.Develop a small script which generate any number of characters random id:

let randomchar='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let generatedId=''
  for(i=0;i<Math.floor(Math.random()*100);i++){
     generatedId+=randomchar.charAt(Math.floor(Math.random()*randomchar.length))
 }
console.log(generatedId)


// var uuid = Math.random().toString(36).slice(-6);

// console.log(uuid);

// 17. Write a script which generates a random hexadecimal number.

const hex='012345678ABCDEF'
let result='';
for(let i=0;i<6;i++){
    result+=hex.charAt(Math.floor(Math.random()*hex.length))
}
console.log(result)

// 3. Write a script which generates a random rgb color number

console.log(`rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`)

//Using the above countries array, create the following new array.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
const newCountries=[];
const countryLength=[];
  for (const country of countries) {
     //newCountries.push(country.toUpperCase())
     countryLength.push(country.length)
      
  }
//console.log(newCountries)
console.log(countryLength)



const smallArray=[];
for (const country of countries) {
    smallArray.push([country,country.slice(0,3).toUpperCase(),country.length])

}
console.log(smallArray)


let countriesWithLand=[]
let countriesWithoutLand=[]
for (const country of countries) {
    if(country.includes('land')){
        countriesWithLand.push(country)
    }
    else{
        countriesWithoutLand.push(country)
    }
}
console.log(countriesWithLand)
console.log(countriesWithoutLand)

const countriesWithIA=[]
const countriesWithoutIA=[]

for (const country of countries) {
    if(country.slice(-2)=='ia'){
        countriesWithIA.push(country)
    }
    else{
        countriesWithoutIA.push(country)
    }
}
console.log(`These are countries ends with "ia" ${countriesWithIA}`)
console.log(`These are countries ends without "ia" ${countriesWithoutIA}`)


let maxlength=countries[0].length
let countryWithMaxLength=countries[0];
for(let i=0;i<countries.length;i++){

        if(maxlength<countries[i].length){
             maxlength=countries[i].length
             if(countries[i].length==maxlength)
             countryWithMaxLength=countries[i]
        }
 
}
console.log(countryWithMaxLength)

const newCountries=[]
for(const country of countries)
    if(country.length==5)
        newCountries.push(country)

console.log(newCountries)

//longest word in webTech Array
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


let webTechCharLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechCharLength.push(webTechs[i].length);
}
console.log(webTechCharLength);

let highest;
highestNum = Math.max.apply(null, webTechCharLength);
console.log(webTechs[webTechCharLength.indexOf(highestNum)]);


let newArr=[]
for (const webTech of webTechs) {
    newArr.push([webTech,webTech.length])
}
console.log(newArr)

let mernStack=["MongoDB", "Express", "React","Node"]
let mern=""
for(let i=0;i<mern.length;i++){
    mern+=mern[i].slice(0,0)
}
console.log(mern)

let mernStack = ["MongoDb", "Express", "React", "Node"]
let acronym = "";
for (let i = 0; i < mernStack.length; i++) {
    acronym += mernStack[i].slice(0, 1);
}
console.log(acronym.toLowerCase()+ 'Stack')

let arr1= ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
for(const a of arr1){
  console.log(a)
}

for(let i=0;i<arr1.length;i++){
  console.log(arr1[i])
}

let fruits= ['banana', 'orange', 'mango', 'lemon'] 
for(i=fruits.length-1;i>=0;i--){
  console.log(fruits[i])
}
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

const fullStackNew=fullStack.toString().split(',')
  for(let i=0;i<fullStackNew.length;i++)
       console.log(fullStackNew[i])



//Level 3


const countriesNew = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe'
]


//copying arrays

let c1=[]
// Highest performance for deep copying literal values
// c1=[...countriesNew]
// console.log(c1)
c1=countriesNew.slice()
//c1=countriesNew.splice(0)
//console.log(c1)


// Arrays are mutable. Create a copy of array which does not modify the original.
// Sort the copied array and store in a variable sortedCountries
let sortedCountries=[]
sortedCountries=[...countriesNew.sort()]
console.log(sortedCountries)


// Sort the webTechs array and mernStack array
console.log(webTechs.sort())
console.log(fullStackNew.sort())

// Extract all the countries contain the word 'land' from the countries array and print it as array
let countriesWithLand=[]
for (const country of countriesNew) {
    if(country.includes('land')){
        countriesWithLand.push(country)
    }  
}
console.log(countriesWithLand)

// Extract all the countries containing only four characters from the countries array and print it as array
// Extract all the countries containing two or more words from the countries array and print it as array
let countryWithFourLength=[]
let countryWithTwoOrMoreLength=[]
for(let i=0;i<countriesNew.length;i++)
  if(countriesNew[i].length==4){
    countryWithFourLength.push(countriesNew[i])
  }
  else if(countriesNew[i].length>=2){
    countryWithTwoOrMoreLength.push(countriesNew[i])
  }
console.log(countryWithFourLength)
console.log(countryWithTwoOrMoreLength)



// Reverse the countries array and capitalize each country and stored it as an array

let reversedList=[]
for(let i=countriesNew.length-1;i>=0;i--){
  reversedList.push(countriesNew[i].toUpperCase())

}
console.log(reversedList)