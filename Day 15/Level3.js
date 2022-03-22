class Statistics{
    constructor(arr)
    {
        this.arr=arr
    }

    get getLength(){
        return this.arr.length
    }
    get getSortedArr(){
        return this.arr.sort((a,b)=>{return a-b})
    }
    sum(){
        return  this.arr.reduce((acc,curr)=>acc+curr,0)
      }
      min(){
        return  Math.min(...this.arr)
      }
      max(){
        return Math.max(...this.arr)
      }
      range(){
        return Math.abs(Math.max(...this.arr)-Math.min(...this.arr))
      }
      mean(){
        return Math.ceil(this.sum()/this.getLength)
      }
      median(){
        //let sort=this.arr.sort((a,b)=>{return a-b})
        let median=''
        var length=this.getSortedArr.length
        let half=Math.floor(length/2) 
        if(length%2==0){
          median=Math.floor((this.getSortedArr[half]+(this.getSortedArr[half-1]))/2)}
        else 
          median=Math.floor(this.getSortedArr[half])
    
        return median
      }
      mode(){
        //let sortedArr=this.arr.sort((a,b)=>{return a-b})
        const count={}
        for(let i=0;i<this.getSortedArr.length;i++){
          count[this.getSortedArr[i]]=(count[this.getSortedArr[i]] || 0)+1
         
        }
        var max=0
        let  values=[];
        for (var key in count){
          if(count.hasOwnProperty(key)){
            if(count[key]>max){
              max = count[key];
              values = [key];
          } else if (count[key] === max) {
              max = count[key];
              values.push(key);
            }
          }
        }
        return `{${values}:${max}}`;
    }
    var(){
       let variance=this.arr.map((value)=>{
           return Math.pow(value-this.mean(),2);
        }).reduce((acc,curr)=>acc+curr,0)/this.arr.length
    return variance  }
    
    std(){
     return Math.sqrt(this.var()).toFixed(1)
    }
    
    freqDist(){
      let fd=this.arr.reduce((acc,item)=>{
        acc[item]=(acc[item]||0)+1
        return acc
      },{})
      return fd
    }
    describe() {
        return `
        Count: ${this.getLength}
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}\n
        Mode: ${this.mode()}\n
        Variance: ${this.var()}\n
        Standard Deviation: ${this.std()}\n
        Frequency Distribution: ${this.freqDist()}`
    }
}



let st1= new Statistics([31,26, 34 ,37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
console.log(st1.describe())

class PersonAccount{
  constructor(){
  this.firstName='';
  this.lastName='';
  this.incomes=[];
  this.expenses=[];
  }
  get getfirstName(){
    return this.firstName
  }

  get getlastName(){
    return this.lastName
  }
  
  set setfirstName(firstName){
    this.firstName+=firstName
  }
  set setLastName(lastName){
    this.lastName+=lastName
  }
  set addIncome(income){
    this.incomes.push(income)
  }
  set addExpense(expense){
    this.expenses.push(expense)
  }

  totalIncome(){
   return this.incomes.reduce((acc,income)=>acc+income,0);
  }

  totalExpenses(){
   return this.expenses.reduce((acc,expense)=>acc+expense,0);
  }
  accountBalance(){
    let balance= this.totalIncome()-this.totalExpenses();
    return balance;

  }
  accountInfo(){
    return `Hi I am ${this.firstName} ${this.lastName}. My total income is ${this.totalIncome()} and my expenses are ${this.totalExpenses()}. My account Balance is ${this.accountBalance()}`;
  }
}

let person=new PersonAccount();
person.setfirstName='John';
person.setLastName='Walter';
person.addIncome=15000
person.addIncome=2000
person.addIncome=50000
person.addExpense=15000
person.addExpense=10000
person.totalIncome()
person.totalExpenses()
person.accountBalance()
console.log(person.accountInfo())
