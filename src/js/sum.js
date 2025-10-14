// який містить функцію для знаходження суми елементів масиву чисел.

function sumNum(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum;
}

export default sumNum; // Дефолтний експорт

// Дефолтний експорт використовуємо коли треба експортувати одну сутність з файла