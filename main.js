//include('countries.js')
//include('web_techs.js')
//importScripts('countries.js','web_techs.js')
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.split(' '))
console.log(text.split(' ').length)
//console.log(words.length)
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log(shoppingCart.unshift('Meat'))
console.log(shoppingCart)
console.log(shoppingCart.push('Sugar'))
console.log(shoppingCart)


    //    shoppingCart.splice(shoppingCart.indexOf('Honey'),1)
    //     console.log(shoppingCart)

   

let allergicToHoney=true;

    if(allergicToHoney===true){
        if(shoppingCart.includes('Honey')){
            shoppingCart.splice(shoppingCart.indexOf('Honey'),1) 
        }
        else{
            console.log('Does not include honey in cart')
        }
    }
    else{
         console.log('Not Allergic')
    }
    console.log(shoppingCart)
 
    console.log(shoppingCart[3]='Green Tea')
    console.log(shoppingCart)
    

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
//const fullStack=[frontEnd,backEnd]
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)