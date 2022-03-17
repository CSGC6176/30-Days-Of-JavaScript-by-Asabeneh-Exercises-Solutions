// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [name, skills, jsScore,reactScore]=student
// console.log(name, skills, jsScore.slice(2,3).toString(), jsScore.slice(3,).toString())


// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]

// const convertArrayToObject=(arr)=>{
//     const result= arr.map(([name, skills, scores])=>({name, skills, scores}))
//     return result
// }


// console.log(convertArrayToObject(students))

const studentss = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const target={...studentss}
console.log(target)

target.skills.frontEnd.push({skill: 'BootStrap',level: 8})
target.skills.backEnd.push({skill: 'Express',level: 9})
target.skills.dataBase.push({ skill: 'SQL',level: 8})



let{name,skills,dataScience}=target
console.log(name,skills,dataScience)

console.log(studentss)





