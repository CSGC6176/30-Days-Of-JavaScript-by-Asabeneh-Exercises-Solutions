//Exercise Level 2
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

if(countries.includes('Ethiopia')){
    console.log('ETHIOPIA')
}
else{
    countries.push('Ethiopia');
}

console.log(countries.slice(0,10))

console.log(countries[Math.floor(countries.length/2)])


let arr1;let arr2;
if(countries.length%2==0){
    arr1 = countries.slice(0,countries.indexOf(countries[Math.floor(countries.length/2)]))
    arr2 = countries.slice(countries.indexOf(countries[Math.floor(countries.length/2)]),(countries.indexOf(countries[countries.length-1]))+1)
    console.log(arr1 + "\n" +  arr2)
}
else{
    arr1= countries.slice(0,countries.indexOf(countries[Math.floor(countries.length/2)]))
    console.log(arr1.push('India'))
    let arrnew=countries.concat(arr1)
    console.log(arrnew)
}




