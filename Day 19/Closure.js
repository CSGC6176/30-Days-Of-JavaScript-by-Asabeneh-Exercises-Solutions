function outer(){
    let count=0;
    function innerfunction(){
        count++
        return count
    }
    return innerfunction
}
const innerFunc = outer()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())


function outerfunc(){
    let count=0;
    function plusOne(){
        count++;
        return count;
    }
    function  minusOne(){
        count--;
        return count;
    }
return {
    plusOne:plusOne(),
    minusOne:minusOne()
}

}

const  innerFuncs = outerfunc();

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)

