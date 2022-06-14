const body= document.querySelector('body')
const title1= document.querySelector('h1')
const title2 = document.querySelector('h2')
const para= document.querySelector('p')
const lis = document.querySelectorAll('li')

body.style.textAlign="center";
body.style.fontFamily="sans-serif";

title2.style.textDecoration="underline"
title2.style.fontSize='24px';

title1.innerHTML='Asabeneh Yetayeh challenges in <span id="year">2020<span>'
let year =document.querySelector('#year');
let color;
const change=()=>{
    let random1 =  Math.floor(Math.random() * 255);
    let random2 =  Math.floor(Math.random() * 255);
    let random3 =  Math.floor(Math.random() * 255);
    color=`rgb(${random1},${random2},${random3})`;
    year.style.color=color;
}
setInterval(change,1000)

para.textContent = Date();
para.style.border = "solid"
para.style.width = "300px";
para.style.margin = "0 auto"

const change2=()=>{
    let random1 =  Math.floor(Math.random() * 255);
    let random2 =  Math.floor(Math.random() * 255);
    let random3 =  Math.floor(Math.random() * 255);
    color=`rgb(${random1},${random2},${random3})`;
    para.style.backgroundColor = color;
}
setInterval(change2,1000)

lis.forEach(l =>{
    l.style.listStyle = "none";
    l.style.border = "solid";
    l.style.margin = "0 auto"
    l.style.padding="10px"
    l.style.width = "650px";
    l.style.height = "40px"
    l.style.textAlign='left'
    if(l.textContent.toLowerCase().includes("done")){
        l.style.backgroundColor='green'
    }
    else if(l.textContent.toLowerCase().includes("ongoing")){
        l.style.backgroundColor="yellow"
    }
    else{
        l.style.backgroundColor='red'
    }
});