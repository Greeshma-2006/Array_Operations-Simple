const m = [78, 92, 35, 88, 40, 67];

console.log("1. Passed (>=40):",
  m.filter(x => x >= 40)
);

console.log("2. After Grace +5:",
  m.map(x => x + 5)
);

console.log("3. Highest Mark:",
  m.reduce((a, b) => a > b ? a : b)
);

console.log("4. First Below 40:",
  m.find(x => x < 40)
);

console.log("5. Index of 92:",
  m.findIndex(x => x === 92)
);