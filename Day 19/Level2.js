function outer(){
    let count=0;
    function plusOne(){
        count++;
        return count;

    }
    function minusOne(){
        count--;
        return count;
    }
    function plusTwo(){
        count++;
        return count;
    }
    return{
        plusOne:plusOne(),
        minusOne:minusOne(),
        plusTwo:plusTwo()
    }
}
const outer1 = outer();

console.log(outer1.plusOne);
console.log(outer1.minusOne);
console.log(outer1.plusTwo);