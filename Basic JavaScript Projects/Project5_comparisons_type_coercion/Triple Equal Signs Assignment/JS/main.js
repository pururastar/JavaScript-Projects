// Use === to perform strict comparisons and return "true" or "false"
const strictEqual1 = 5 === 5; // true (same data type and value)
const strictEqual2 = '5' === 5; // false (different data types)
const strictEqual3 = 'hello' === 'world'; // false (different values)
const strictEqual4 = true === true; // true (same data type and value)
const strictEqual5 = null === undefined; // false (different data types)

console.log(`Is 5 strictly equal to 5?`, strictEqual1);
console.log(`Is '5' strictly equal to 5?`, strictEqual2);
console.log(`Is 'hello' strictly equal to 'world'?`, strictEqual3);
console.log(`Is true strictly equal to true?`, strictEqual4);
console.log(`Is null strictly equal to undefined?`, strictEqual5);
