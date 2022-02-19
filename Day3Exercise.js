let firstName='Govind';
let lastName='Chauhan'
let country='India'
let city='Mumbai'
let age=24
let isMarried=false
let year=2022

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log(typeof '10'===10);
console.log(parseInt('9.8')===10);
console.log(parseInt('9.8')==10);


console.log(1===1);
console.log(2<3 && 6>=5);
console.log(6!=5);

console.log(0===1);
console.log(2>3 && 6>=5);
console.log(6===5);
console.log(6===5);

console.log('----------------')
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length != 'jargon'.length)

console.log('----------------')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
//console.log(4 === '4')
//console.log('python'.length != 'jargon'.length)



let word='on';
console.log(!('dragon'.includes('on')));



const now= new Date();
console.log(now.getFullYear());
console.log(now.getMonth()+1);
console.log(now.toISOString().slice(0,10));
console.log(now.toLocaleDateString());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(Date.now());



let x,y;
y=2*x-2;
let slope=2;
let x_intercept=2/2
let y_intercept=-2;
console.log(slope,x_intercept,y_intercept);

let x1,x2,y1,y3;
x1=1;
x2=2;
y1=6;
y2=10;
let m=(y2-y1)/(x2-x1)
console.log("slope of line is " + m )

console.log('----------------');
let xx,yy;
xx=77;
yy=0;
yy = xx**2 + 6*xx + 9;
//xx=77;
console.log("yy " + yy)

let name='Govind';
name.length>7 ? console.log(' your name is long'):console.log('your name is long');

firstName = 'Asabeneh'
lastName = 'Yetayeh'
firstName>lastName?console.log(' Your first name '+ firstName + ' is longer than your family name '+lastName):console.log(' Your first name'+firstName+ 'is shorter than your family name'+lastName)

let myAge = 24
let yourAge = 26

myAge>yourAge?
console.log('I am ' +Math.abs(myAge-yourAge)+ ' years older than you.'):console.log('I am ' +Math.abs(myAge-yourAge)+ ' years younger than you.')

console.log(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
var date = new Date("2012-01-18T09:03")
console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()<10?'0'+date.getHours():date.getHours()}:${date.getMinutes()<10?'0'+date.getMinutes():date.getMinutes()}`);


