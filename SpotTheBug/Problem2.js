function addOneMonth(date) {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + 1);
  if (newDate.getDate() !== date.getDate()) {
    newDate.setDate(0);
  }
  return newDate.toDateString();
}

const today = new Date(2025, 4, 6); // April 4, 2025
const oneMonthFromToday = addOneMonth(today);

console.log(oneMonthFromToday);

// Problem: Passing current date as arg, it returns 2 months old date
// Why: Months are based on 0 index so for April it should be 3 not 4
// Solution: Pass months number one less than actual like for April it should be 3 not 4

const correctToday = new Date(2025, 3, 6);
