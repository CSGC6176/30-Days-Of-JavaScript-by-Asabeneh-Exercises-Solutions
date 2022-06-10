const personAccount={
    firstName:'John',
    lastName:'Doe',
    incomes:{
        job:22500,
        freelancing:15000

    },
    expenses :{
       food:5000,
       utilities:5000,
       transport:500

    },
    totalIncome:function(){
        let totalIncome=0;
        let values=Object.values(this.incomes)
        for(i of values){
            totalIncome+=values[i]
        }
        return totalIncome

    },
    totalExpense:function(){
        let tExpense=0;
        let values=Object.values(this.expenses)
        for(i of values){
            tExpense+=values[i]
        }
        return tExpense
    },
    addIncome:function(value){
        let newValues=Object.values(this.incomes)
        for(i of newValues){
            newValues.push(value)
        }
        return newValues
    },


    addExpense:function(value){
        let newValues=Object.values(this.expenses)
        for(i of newValues){
            newValues.push(value)
        }
        return newValues
    },
    accountBalance:function(){
        return this.totalIncome-this.totalExpense
    },
    accountInfo: function () {
        return `name:${this.firstName} ${this.lastName}\n
                incomes:${Object.entries(this.income)}
                expenses: ${
                    Object.entries(this.expenses)
                }
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpenses()}
                accountBalance: ${this.accountBalance()}
                `
    }
}

let accountInfo=JSON.stringify(personAccount);
console.log(accountInfo)
// localStorage.setItem("acc",accountInfo)
// console.log(localStorage);
