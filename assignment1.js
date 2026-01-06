let t = [32, 35, 28, 40, 38, 30, 42];

// Task 1: filter temperatures above 35
console.log(t.filter(x => x > 35));

// Task 2: convert Celsius to Fahrenheit
console.log(t.map(c => c * 9 / 5 + 32));

// Task 3: calculate average temperature
console.log(t.reduce((a, b) => a + b) / t.length);

// Task 4: find first temperature above 40
console.log(t.find(x => x > 40));

// Task 5: find index of temperature 28
console.log(t.findIndex(x => x === 28));
