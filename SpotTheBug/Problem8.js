// What is the result of pAll

async function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("I'm rejected"), 1000);
  }).catch((error) => {
    console.error(error);
  });
}

async function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("I'm resolved"), 1000);
  });
}

async function pAll() {
  return Promise.all([p2(), p1()])
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.log(error);
    });
}

pAll();

// Promise.All rejects if there is any error in any promises
// So expected result rejected message
// Actual Result :  I'm rejected [ "I'm resolved", undefined ]
// Reason: Promise p1 is handling its error in its own catch method, so both promises are fulfilled
// but there is nothing returned from p1 so undefined.
