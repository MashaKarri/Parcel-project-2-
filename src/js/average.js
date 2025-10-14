// Створіть модуль 
// який містить функцію для знаходження середнього значення масиву чисел.

function average(numbers) {
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    const average = sum / numbers.length;
    return average;
}

export default average