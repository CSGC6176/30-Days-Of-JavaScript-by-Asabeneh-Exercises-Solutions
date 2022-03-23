const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
console.log(JSON.stringify(skills));

const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
  }
console.log(JSON.stringify(student,['age']));
console.log(JSON.stringify(student,['isMarried']));
console.log(JSON.stringify(student));



