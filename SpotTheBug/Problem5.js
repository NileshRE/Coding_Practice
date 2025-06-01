function calculateTotalCost(mealCost, taxRate = 0.1, tip = 0) {
  arguments[1] = 0.15;
  arguments[2] += 5;
  console.log(mealCost, taxRate, tip);

  let totalCost = mealCost + mealCost * taxRate + tip;
  return totalCost;
}

let total = calculateTotalCost(50, undefined, 10);

// Expected Total = 72.5
// Actual = 65

// Reason

// If we pass new values to the parameter of a function through argument object and
// also pass params in function call.
// Then, default values or values passed in params will take charge.
// As the function is in non-strict mode, it will not sync new values with the args object.
