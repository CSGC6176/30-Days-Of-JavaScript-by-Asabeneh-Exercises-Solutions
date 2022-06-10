function outer(){
    let count=1;
    function add(){
        count++        
        return count;
    }
    return add
}
const add=outer();

console.log(add())
console.log(add())
console.log(add())