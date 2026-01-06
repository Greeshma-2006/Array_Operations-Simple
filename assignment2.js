let c = ["javascript", "react", "node", "mongodb", "express"];

// Task 1: filter courses with name length > 5
console.log(c.filter(x => x.length > 5));

// Task 2: convert course names to uppercase
console.log(c.map(x => x.toUpperCase()));

// Task 3: generate single combined string
console.log(
  c.reduce((a, b) => a + " | " + b.toUpperCase(), "").slice(3)
);

// Task 4: find course "react"
console.log(c.find(x => x === "react"));

// Task 5: find index of "node"
console.log(c.findIndex(x => x === "node"));
