import average from "./average.js"; // Дефолтний імпорт прописується без фігурних дужок
import sumNum from "./sum.js"; // Дефолтний імпорт прописується без фігурних дужок
import { stringToArray } from "./string-to-array.js"; // Іменований імпорт
import max from "./max.js";
import add from "./calculator/addition.js";
import subtract from "./calculator/subtraction.js";
import multiply from "./calculator/multiplication.js";
import divide from "./calculator/division.js";
import printResult from "./calculator/result.js";


const numbers = [1, 2, 3, 4, 5];
const avg = average(numbers);
console.log(`Average: ${avg}`);


const result = sumNum(numbers);
console.log(`Sum: ${result}`);


const str = "one,two,three,four,five";
const separator = ",";
const result2 = stringToArray(str, separator);
console.log(`Result: ${result2}`);


const result3 = max(numbers);
console.log(`Max: ${result3}`);


let a = 10;
let b = 5;

let sum = add(a, b);
let difference = subtract(a, b);
let product = multiply(a, b);
let quotient = divide(a, b);

printResult(sum);
printResult(difference);
printResult(product);
printResult(quotient);
