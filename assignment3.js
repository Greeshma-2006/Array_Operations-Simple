let m = [78, 92, 35, 88, 40, 67];

// Task 1: filter pass marks (>= 40)
console.log(m.filter(x => x >= 40));

// Task 2: add 5 grace marks
console.log(m.map(x => x + 5));

// Task 3: find highest mark
console.log(m.reduce((a, b) => a > b ? a : b));

// Task 4: find first mark below 40
console.log(m.find(x => x < 40));

// Task 5: find index of mark 92
console.log(m.findIndex(x => x === 92));
