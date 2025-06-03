// Star Patterns

let n = 5;

// 4 stars in 4 row
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n; j++) {
    row = row + " *";
  }
  console.log(row);
}

// Star will be equal to row
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row = row + " *";
  }
  console.log(row);
}

// Number Pattern - Numbers will be equal to rows and increasing columns
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// Number Pattern - Numbers will be equal to rows and columns value will be same as rows
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

// Inverted Triangle Number Pattern
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

// Inverted Triangle Star Pattern
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - i; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Spaces with Star - (Right Sided right angled)
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " "; // For Spaces
  }
  for (let j = 0; j < i + 1; j++) {
    row = row + "*"; // For stars
  }
  console.log(row);
}

// 1' and 0's pattern with triangle
for (let i = 0; i < n; i++) {
  let row = " ";
  let toogle = 1;
  //   for (let j = 0; j < n - (i + 1); j++) {
  //     row = row + " ";         // For Spaces
  //   }
  for (let j = 0; j < i + 1; j++) {
    row = row + toogle;
    if (toogle == 1) {
      toogle = 0;
    } else {
      toogle = 1;
    }
  }
  console.log(row);
}
