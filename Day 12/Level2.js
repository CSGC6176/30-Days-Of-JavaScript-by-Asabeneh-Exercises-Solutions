

let  paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
let result=paragraph.match(/\w+/g)

console.log(result)

let tenMostFrequentWords=(para,n)=>{
let occurrence={}
for( let i of para){
    if(occurrence[i]){
        occurrence[i]++
    }
    else{
        occurrence[i]=1
    }

}

let sorted=[]
const count = Object.fromEntries(
    Object.entries(occurrence).sort(([,a],[,b]) => b-a)
);
for( let [key,value] of Object.entries(count)) {
         sorted.push(`{word: '${key}' , count: ${value}}`)
}

for (var i = 0; i < sorted.length; i++) {
    sorted[i] = sorted[i].replace(/"/g,'');
}
return sorted.slice(0,n)

}

console.log(tenMostFrequentWords(result,10))