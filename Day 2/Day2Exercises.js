let challenge='30 Days of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substr(3,1));
console.log(challenge.substring(3,4));
console.log(challenge.substr(3,18))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' '))

let companies='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';


console.log(companies.split(', '));
console.log(challenge.replace('JavaScript','Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt('J'));
console.log(challenge.indexOf('a'));//first occurence of a
console.log(challenge.lastIndexOf('a'));

let demostr='You cannot end a sentence with because because because is a conjunction';
console.log(demostr.indexOf('because'));
console.log(demostr.lastIndexOf('because'));
console.log(demostr.search('because'));

let demotrim=' 30 Days Of JavaScript '
console.log(demotrim.trim());

let demo='30 Days Of JavaScript';
console.log(demo.startsWith('30 Days Of JavaScript'))
let demo2=' Hello!! Welcome to 30 Days Of JavaScript'
console.log(demo2.endsWith('30 Days Of JavaScript'));

console.log(demo.match(/a/gi));

let str1='30 Days of';
let str2='JavaScript';
console.log(str1.concat(" " +str2));

console.log(demo.repeat(2));

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another')
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")


console.log(typeof '10');
console.log(typeof '10'== typeof 10);
console.log(typeof '10'== typeof toString(10));

//let ch=10;
//console.log(ch.toString());
//console.log(typeof '10'== typeof ch.toString());
console.log(parseFloat('9.8') == 10);

console.log(Math.ceil(parseFloat('9.8') )== 10);

let strFind= 'python and jargon';
console.log(strFind.includes('on'));
let find1='I hope this course is not full of jargon';
console.log(find1.includes('jargon'));

console.log(Math.floor(Math.random()*101));
console.log(Math.floor(Math.random()*51)+51);
console.log(Math.floor(Math.random()*256));

let stringdata = 'JavaScript';
let  randomLetter=stringdata[Math.floor(Math.random()*stringdata.length)]
console.log(randomLetter);

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');
console.log(demostr.substr(31,24));


//Level 3
let data="Love is the best thing in this world. Some found their love and some are still looking for their love.";
//let regex=data.match(/love/gi)
console.log(data.match(/love/gi).length);

let data2="You cannot end a sentence with because because because is a conjunction."
console.log(data2.match(/because/gi).length);

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
//let reg=/[^a-zA-Z0-9 ]/g;
console.log(sentence.replace(/[^a-zA-Z0-9 ]/g,""))

let ann='He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let pattern=ann.match(/\d+/gi);
console.log(pattern);
sum = pattern.reduce((a, b)=>a + b,0);
console.log(`sum : ${sum}`)