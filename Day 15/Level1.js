class Animal{
    constructor(name, age, color, legs){
        this.name=''
        this.age=0
        this.color=''
        this.legs=0
    }
    getFullInfo(){
        return `${this.name} is ${this.age} years old and is ${this.color} in color and has ${this.legs} legs`
        
    }
    get getColor()
    {
        return this.color
    }
    get getAge()
    {
        return this.Age
    }
    get getName()
    {
        return this.name
    }
    get getLegs()
    {
        return this.leg
    }
    set setColor(color){
        this.color+=color
    }

    set setAge(age){
        this.age+=age
    }

    set setName(name){
        this.name+=name
    }

    set setLeg(leg){
        this.legs+=leg
    }
}

// let dog= new Animal();
// dog.setName='Tom'
// dog.setAge=4
// dog.setColor='brown'
// dog.setLeg=4
// console.log(dog.getFullInfo())

class Dog extends Animal{
    constructor(name, age, color, legs){
        super(name,age,color,legs)
            this.gender=''
        }

        get getGender(){
            return this.gender
        }
        set setGender(gender){
            this.gender+=gender
        }
        getFullInfo(){
            return `${this.name} is ${this.age} years old ${this.gender} dog and is ${this.color} in color and has ${this.legs} legs`
        }
    }

class Cat extends Animal{
    constructor(name, age, color, legs){
        super(name,age,color,legs)
            this.gender=''
        }

        get getGender(){
            return this.gender
        }
        set setGender(gender){
            this.gender+=this.gender
        }
        getFullInfo(){
            return `${this.name} is ${this.age} years old ${this.gender} cat and is ${this.color} in color and has ${this.legs} legs`
        }
    }


let dog=new Dog();
dog.setName='Rauf';
dog.setAge=5;
dog.setGender='Male'
dog.setColor='Black'
dog.setLeg=4

console.log(dog.getFullInfo());