dog={}
console.log(dog)

dog.name='John',
dog.legs=4,
dog.color='brown',
dog.age=8,
dog.bark=function(){
    return `woof woof`
}




console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())


//console.log(Object.values(dog))

dog.breed='Labrador'
dog.getInfo=function(){
    console.log(Object.values(this))
}

console.log(Object.values(this))



