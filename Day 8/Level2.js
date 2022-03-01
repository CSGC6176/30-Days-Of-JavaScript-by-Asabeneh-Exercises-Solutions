const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

  let max=0
  let highestSkill;
  for(let i in  users){
      if(users[i].skills.length>max)
      {
          max=users[i].skills.length
          highestSkill=i
      }

  }
  console.log(highestSkill)
  
let countLoggedIn=0;
let countUsers=0;
let countMern=0;
for(i in users){
    if(users[i].isLoggedIn==true){
        countLoggedIn++
    }
    if(users[i].points>=50){
        countUsers++
    }

    if((users[i].skills.includes('MongoDB')  && users[i].skills.includes('Express') && users[i].skills.includes('React') && users[i].skills.includes('Node') ))
    {
        countMern++
    }

  }


console.log(countLoggedIn)
console.log(countUsers)
console.log(countMern)


const name=Object.assign({},users,{name:'Jane'})
console.log(name)

console.log(Object.keys(users))

console.log(Object.values(users))

const country={
    name:"India",
    capital:'New Delhi',
    population:'1,402,115,276',
    languages:["Hindi","Tamil","Punjabi"],
}
console.log(`${country.name}\n${country.capital}\n${country.population}\n${country.languages}`)