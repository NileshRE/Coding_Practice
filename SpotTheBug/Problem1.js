function reduceLanguages(str, lang, i) {
  if (i === this.languages.length - 1) {
    return `${str} and ${lang}.`;
  }

  return `${str} ${lang},`;
}

const user = {
  name: "Nilesh",
  age: 27,
  languages: ["JavaScript", "Ruby", "Python"],
  greet() {
    const hello = `Hello, my name is ${this.name} and I know`;

    const langs = this.languages.reduce(reduceLanguages, "");

    return hello + langs;
  },
};

const greeting = user.greet();
console.log(greeting);

// Error: Cannot read properties of undefined (reading 'length')
// Why: Incorrect usage of "this", "this" is not called in right context
// This inside a regular function depends on where it is called not where it is defined

// Solution:

// Bind this to the function so it knows the context

const langs = this.languages.reduce(reduceLanguages.bind(this), "");

// Can we use .call() instaed of .bind() ?

// No, as call is used to execute the function immediately but we need to pass the function as reduce expects a function

// Can use an arrow function instead

const langs1 = this.languages.reduce((str, lang, i) => {
  if (i === this.languages.length - 1) {
    return `${str} and ${lang}`;
  }

  return `${str} and ${lang}`;
}, "");

// Arrow functions don’t have their own this — they inherit it from the enclosing scope.
