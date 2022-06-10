// const doSomething = callback=>{
//     setTimeout( () => {
//         const skills =['HTML','CSS','JS']
//         //callback('It did not go well',skills)
//         callback(false,skills)
//     } ,2000 ) 
// }

const { reject } = require("lodash")


// const callback = (err,result) => {
//     if(err) {
//         return console.log(err)
//     }
//     return console.log(result)
// }

// doSomething(callback)

const promise = new Promise((resolve,reject)=>{
    resolve('success')
    reject('failure')
})



const doPromise = new Promise((resolve,reject)=>{
    setTimeout( () => {
        const skills=['HTML','CSS','JS']
        // if(skills.length > 0){
            if(skills.includes('Node')){
            // resolve(skills)
            resolve('FullStack Developer')
        }
        else{
            reject('Something wrong has happened')
        }
        },2000)
    })

    doPromise
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log(error))


//Fetch Api

// import fetch from "node-fetch";
// const parse = require('node-fetch');
// const url = 'https://restcountries.com/v2/all' //countries api
// fetch(url)
//         .then(response => response.json()) //accessing the api data as JSON
//         .then(data =>{
//             //getting the data
//             console.log(data)
//         })
//         .catch(error => console.error(error)) //handling error if something happens wrong happens   

//Asysnc and await
const square= async function(n){
     return n*n
}

square(2)