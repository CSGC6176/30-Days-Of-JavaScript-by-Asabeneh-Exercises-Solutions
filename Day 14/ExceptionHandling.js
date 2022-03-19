try{
    let lastName='Doe';
    let fullName=firstName+' '+lastName;

}
catch(err){
    console.log('Name of the error',err.name);
    console.log('Message of the error',err.message)
}
finally{
    console.log('In any case I will be executed');
}

const throwErrorExampleFun = () => {
    let message
    let x =10
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  throwErrorExampleFun()