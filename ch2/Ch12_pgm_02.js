const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// 1. Find the union of a and b
const union = Array.from(new Set([...a, ...b]));
console.log('Union of a and b:', union);

// 2. Find the intersection of a and b
const intersection = a.filter(value => b.includes(value));
console.log('Intersection of a and b:', intersection);

// 3. Find a without b (difference a - b)
const difference = a.filter(value => !b.includes(value));
console.log('a without b:', difference);

// Find a union b
// Find a intersection b
// Find a with b