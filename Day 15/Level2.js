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

class Cat extends Animal{
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
        getFullInfo(){//overriden method
            return `${this.name} is ${this.age} years old ${this.gender} cat and is ${this.color} in color and has ${this.legs} legs`
        }
    }

let cat=new Cat();
cat.setName='Ruby';
cat.setAge=3;
cat.setGender='Female'
cat.setColor='White'
cat.setLeg=4

console.log(cat.getFullInfo());