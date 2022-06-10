function  personAccount(){
    let firstName="John";
    let lastName="Doe";
    let incomes=[15000,30000];
    let expenses=[300,400];
    
    function addIncome(income){
        incomes.push(income);
        return incomes;
}   
    function addExpense(expense){
        expenses.push(expense);
        return expenses;
}

function totalIncome(){
    let totalInc=0;
    let totalExp=0;
    incomes.forEach( income => {
        totalInc+=income;
    })
    expenses.forEach(expense =>{
        totalExp+=expense;
    })
    let result =totalInc-totalExp;
    return result;

}
function totalExp(){
    let totalExp=0;
    expenses.forEach(expense => {
        totalExp+= expense
    })
    return totalExp
}
function accountBal(){
    return totalIncome;
}
function accountInfo(){
    return `name:${firstName} ${lastName} Balance:${totalIncome()}`
}
return {
    addIncome: addIncome(),
    addExpense : addExpense(),
    totalIncome: totalIncome(),
    totalExp: totalExp(),
    accountBalance: accountBal(),
    accountInfo: accountInfo()

}
}
const accFunc= personAccount();
console.log(accFunc.accountInfo)
