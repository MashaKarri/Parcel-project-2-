import average from "./average"; // Дефолтний імпорт прописується без фігурних дужок
import sum from "./sum"; // Дефолтний імпорт прописується без фігурних дужок
import { stringToArray } from "./string-to-array.js"; // Іменований імпорт
import max from "./max.js";

const numbers = [1, 2, 3, 4, 5];
const avg = average(numbers);
console.log(`Average: ${avg}`);

const result = sum(numbers);
console.log(`Sum: ${result}`);

const str = "one,two,three,four,five";
const separator = ",";
const result2 = stringToArray(str, separator);
console.log(`Result: ${result2}`);


const result3 = max(numbers);
console.log(`Max: ${result3}`);