Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
  }
  if (!Array.isArray(args)) {
    throw new Error("Pass arguments as Array");
  }

  context.fn = this;
  context.fn(...args);
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

console.log(havePlayed.myApply(match2, [4]));
