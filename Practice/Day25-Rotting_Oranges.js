// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

function orangesRottingMin(grid) {
  let m = grid.length; //rows
  let n = grid[0].length; //columns
  let queue = [];
  for (let i = 0; i < m; i++) {
    //At first, push all rotten oranges to queue
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let maxMinutes = 0; // let maxMinutes be 0
  while (queue.length) {
    // run loop till queue has 0 items left
    let [x, y, level] = queue.shift(); // take the indexes from grid, keeping track of levels for minute count
    if (x > 0 && grid[x - 1][y] === 1) {
      // if x is greater than 0 and item at left is 1 make it 2
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, level + 1]);
    }
    if (x < m - 1 && grid[x + 1][y] === 1) {
      // if x is less than rows-1 and item at right is 1 make it 2
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, level + 1]);
    }
    if (y > 0 && grid[x][y - 1] === 1) {
      // if y is greater than 0 and item at top is 1 make it 2
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, level + 1]);
    }
    if (y < n - 1 && grid[x][y + 1] === 1) {
      // if y is less than columns-1 and item at bottom is 1 make it 2
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, level + 1]);
    }
    maxMinutes = Math.max(level, maxMinutes);
  }

  for (let i = 0; i < m; i++) {
    // Lastly check if any of item is 1
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }
  return maxMinutes;
}

console.log(
  orangesRottingMin([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
