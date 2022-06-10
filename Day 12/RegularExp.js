/* RegExp parameters
A regular expression takes two parameters. One required search pattern and an optional flag.

Pattern
A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for.

Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let see some of the flags:

g:is a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline */

// let pattern='love'
// let regEx=new RegExp(pattern)


// let flag = 'gi'
// let regEx2 = new RegExp(pattern, flag)
/* 
const str='I love JavaScript'
const pattern=/love/
const result=pattern.test(str)
console.log(result) */

/* const str='I love JavaScript'
const pattern=/love/
const result=str.match(pattern)
console.log(result) */

// const str='I love JavaScript'
// const pattern=/love/g
// const result=str.match(pattern)
// console.log(result)

const str='I love JavaScript'
const pattern=/love/g
const result=str.search(pattern)
console.log(result)

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced=txt.replace(/Python|python/ ,'JavaScript')
console.log(matchReplaced)

let matchReplacedGlobally=txt.replace(/Python|python/gi,'JavScript')
console.log(matchReplacedGlobally)

const txt1 = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

let matches=txt1.replace(/%/g,'')
console.log(matches)
