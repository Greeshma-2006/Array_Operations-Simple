const t = [32, 35, 28, 40, 38, 30, 42];

console.log("1. Temperatures above 35:", t.filter(x => x > 35));

console.log("2. Celsius to Fahrenheit:",
  t.map(c => c * 9 / 5 + 32)
);

console.log("3. Average Temperature:",
  t.reduce((a, b) => a + b) / t.length
);

console.log("4. First temperature above 40:",
  t.find(x => x > 40)
);

console.log("5. Index of temperature 28:",
  t.findIndex(x => x === 28)
);
