Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
  }

  context.fn = this;
  return function (...newArgs) {
    return context.fn(...newArgs, ...args);
  };
};

function havePlayed(times) {
  console.log(
    `I have played ${this.game} as a ${this.role} for ${times} times`
  );
}

const match1 = {
  game: "Cricket",
  role: "Batsman",
};
const match2 = {
  game: "Cricket",
  role: "Bowler",
};
const newFn = havePlayed.myBind(match1);
console.log(newFn(4));
