sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?'
let pattern=sentence.replace(/[^a-zA-Z0-9 ]/g, '')
console.log(pattern)

let mostFrequentWords=(cleanedText,n)=>{
    let occurrence={}
    for( word of cleanedText){
        if(word!==' ')
        occurrence[word]?occurrence[word]++:occurrence[word]=1    }
    let sorted=[]
    let count=Object.fromEntries(
        Object.entries(occurrence).sort(([,a],[,b])=>b-a))

    for( const [key,values] of Object.entries(count)){
        sorted.push(`{word: '${key}' , count: ${values}}`)
    }
    for (let i = 0; i < sorted.length; i++) {
        sorted[i] = sorted[i].replace(/"/g,'');
    }
    return sorted.slice(0,n)
    }

    console.log(mostFrequentWords(pattern,10))