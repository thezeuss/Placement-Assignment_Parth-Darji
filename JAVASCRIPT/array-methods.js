const numbers = [1, 2, 3, 4];
numbers.forEach(num => num * 3); 
console.log(numbers); // Output: 1 2 3 4

const numbers2 = [1, 2, 3, 4];
const trippledNumbers = numbers.map(num => num * 3);
console.log(trippledNumbers); // Output: [3, 6, 9, 12]