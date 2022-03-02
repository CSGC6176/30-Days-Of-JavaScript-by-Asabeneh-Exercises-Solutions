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

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// signUp=function(uname,email,password){
//      for(i in users){
//          if(users[i].username==uname && users[i].password==password){
//              return `user exists`
//          }
//          else{
//              let date= new Date()
//              let idChars='abcdefghijklmnopqrstuvwxyz'
//              let id=''
//              for(let i=0;i<6;i++){
//                  id+=idChars.charAt(Math.floor(Math.random()*idChars.length))
//              }
//              users.push({
//                  _id:id,
//                  username:uname,
//                  email:email,
//                  password:password,
//                  createdAt:`${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`,
//                  isLoggedIn:false
//              })



//              }
//          }
//          console.log('user added')
//          console.log(users[users.length-1])
//         }

// signUp('John','john@john.com','123456')

signIn=function(uname,password){
    for(i in users){
        if(users[i].username==uname && users[i].password==password){
            return `Login Successfull`
        }
        else{
            return 'Try Again'
        }
    }
}

console.log(signIn('Thomas','123333'))


const rateProduct = (name, rate) => {
    products.forEach(product => {
        if (product.name.toLowerCase().includes(name)) {
            let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
            let id = [];
            for (let i = 0; i < 6; i++) {
                id.push(chars[Math.floor(Math.random() * chars.length)])
            }
            id = id.join("");
            product.ratings.push({
                userId: id,
                rate: rate
            })
            console.log("filter");
        } else {
            console.log("no product to rate")
        }
    })
};

const avgRating = (name) => {
    let avg = 0;
    let count = 0;
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {
            products[i].ratings.rate.forEach(rating => {
                count++
                avg += rating
            })
        }
    }
    avg = avg / count
}

const likeProduct = (name) => {
    for (let i = 0; i < products.length; i++) {
        if (name.toLowerCase() === products[i].name.toLowerCase()) {

            if (!products[i].likes) {
                console.log(like);
                let chars = "0123456789abcdefghiklmnopqrstuvwxyz";
                let id = [];
                for (let i = 0; i < 6; i++) {
                    id.push(chars[Math.floor(Math.random() * chars.length)])
                }
                id = id.join("");
                products[i].likes.push(id)
            } else {
                console.log("product has been liked")
            }
        } else {
            console.log("no product available")
        }
    }
}

rateProduct("tv", "4.5");
avgRating("mobile phone");
likeProduct("mobile phone");