function sumArgs() {
  let sum = 0;

  arguments.forEach((arg) => {
    sum += arg;
  });

  return sum;
}

const result = sumArgs(1, 2, 3, 4, 5);

// We don't need to accept params in function call, as it a normal function it has its argument object.
// On running the code we will get an error because arguments is an object not array but array like object
//so, either we need to use rest operator on the params or use for loop or use Array.from method to make it array

// sumArgs(...args)....
// for(i=0; i<=arguments.length; i++){
// sum += arguments[i];
// }....
// Array.from(arguments)....
