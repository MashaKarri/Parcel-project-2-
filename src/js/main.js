import average from "./average";
import sum from "./sum";

const numbers = [1, 2, 3, 4, 5];
const avg = average(numbers);
console.log(`Average: ${avg}`);

const result = sum(numbers);
console.log(`Sum: ${result}`);