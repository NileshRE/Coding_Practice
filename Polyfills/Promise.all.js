const promiseAllPolyfill = function (taskList) {
  const results = [];
  let promisesCompleted = 0;

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {
      promise
        .then((val) => {
          results[index] = val;
          promisesCompleted += 1;

          if (promisesCompleted === taskList.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

function taskResolve(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

function taskReject(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (time < 3000) {
        reject("Rejected");
      } else {
        resolve(time);
      }
    }, time);
  });
}

const taskList1 = [taskReject(1000), taskReject(5000), taskReject(3000)];
const taskList2 = [taskResolve(1000), taskResolve(5000), taskResolve(3000)];

promiseAllPolyfill(taskList1)
  .then((val) => {
    console.log(val);
  })
  .catch(console.error);

promiseAllPolyfill(taskList2)
  .then((val) => {
    console.log(val);
  })
  .catch(console.error);
