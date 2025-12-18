Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Function is not callable");
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
  role: "Rough",
};

console.log(havePlayed.myCall(match2, 4));
