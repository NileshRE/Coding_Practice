function eventuallyFail(time) {
  setTimeout(() => {
    throw Error("Oops!");
  }, time);
}

try {
  eventuallyFail(1000);
} catch (error) {
  console.error(error.message);
  // Code will break as try catch is synchronous and catch will not get any error
  // as setTimeout is async
}

function eventuallyFail(time) {
  return new Promise((res, rej) => {
    // create a new promise
    setTimeout(() => {
      rej(Error("Oops!"));
      // Promise will be rejected after a delay of time provided,
      // So it will be catched as we are catching error after promise rejects
      // Both are async functions, so error logs
    }, time);
  });
}

eventuallyFail(1000).catch((reason) => console.error(reason.message));

async function test() {
  try {
    await eventuallyFail(1000); //Using async await, wait for the Promise to reject by using await
  } catch (e) {
    console.error("Caught with try/catch:", e.message);
  }
}

test();
