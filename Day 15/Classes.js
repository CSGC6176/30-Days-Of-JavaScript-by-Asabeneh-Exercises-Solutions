// class Person{
//     constructor(firstName,lastName,age,country,city){
//         console.log(this)
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.age=age
//         this.country=country
//         this.city=city

//     }
// }
// const person = new Person()
// console.log(person)

// const person1 =new Person('Jane','Doe')
// const person2 = new Person('Lidiya', 'Tekle',24,'Japan','Tokyo',)
// const person3 = new Person('Abraham', 'Yetayeh')
// console.log(person1);
// console.log(person2);
// console.log(person3);

class Person{
    constructor(firstName='Jane',
    lastName='Doe',
    age=30,
    country='China',
    city='Beijing '
    ){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.country=country
    this.city=city
    this.skills=[]
    this.score=0
    }
    getFullName()//methods
    {
        let fullName=this.firstName+' '+this.lastName
        return fullName
    }
    get getScore(){ //getter score
        return this.score
    }
    get getSkills(){
        return this.skills
    }

    set setScore(score){
        this.score+=score
    }

    set setSkill(skill){
        this.skills.push(skill)
    }
}

const person4=new Person();
console.log(person4.getFullName());
console.log(person4.skills);
console.log(person4.getScore);
console.log(person4.getSkills);
c