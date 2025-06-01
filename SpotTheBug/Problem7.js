// Pipe function

const toUpperCase = (str) => str.toUpperCase();
const removeSpaces = (str) => str.replace(/\s/g, "");
const addExclamation = (str) => str + "!!";

const pipe =
  (
    ...fns // Takes functions and convert them to array
  ) =>
  (
    input // Takes input as params to functions
  ) =>
    fns.reduce((acc, fn) => fn(acc), input); // Input is passed as initial value to Reduce function

const formatString = pipe(toUpperCase, removeSpaces, addExclamation);

console.log(formatString("Piping of Functions"));
