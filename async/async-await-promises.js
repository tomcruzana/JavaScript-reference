//doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await

function add(a, b){
  return new Promise((res,rej)=>{
    res(a+b)
  })
}

const doWork = async () => {
  //throw new Error("Something went wrong"); <-this will trigger the catch method
  //return "working!!!"; //explicitly returns a string with the promise
  const sum = await add(1,5); //event loop will wait until this promise is resolved/rejected
  const sum2 = await add(1, sum);
  return sum2;
};

doWork()
  .then(response => console.log(response))
  .catch(err => console.log(err))
