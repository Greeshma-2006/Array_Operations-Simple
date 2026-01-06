const c = ["javascript", "react", "node", "mongodb", "express"];

console.log("1. Length > 5:",
  c.filter(x => x.length > 5)
);

console.log("2. Uppercase:",
  c.map(x => x.toUpperCase())
);

console.log("3. Single String:",
  c.reduce((a, b) => a + " | " + b.toUpperCase(), "").slice(3)
);

console.log("4. Find react:",
  c.find(x => x === "react")
);

console.log("5. Index of node:",
  c.findIndex(x => x === "node")
);
