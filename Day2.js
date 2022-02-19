console.log(`Example of template Strings`)
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a+b}`);
console.log(`${a>b}`);

let string='JavaScript';
console.log(string.substr(3,4));//slice

console.log(string.substring(3,6));

let string1='30 days of JavaScript';
console.log(string1.split());//to array
console.log(string1.split(' '));
let countries='India,China,Nepal,Japan,US'
console.log(countries.split(','));
console.log(countries.split(', '));

let id1 = '      I am a computer     ';
console.log(id1.trim());

let string3 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string3.match('love'))

let pattern = /love/gi
console.log(string3.match(pattern)) 

//Casting
let num='10';
console.log(parseInt(num));
console.log(Number(num));
console.log(+num)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
//console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')