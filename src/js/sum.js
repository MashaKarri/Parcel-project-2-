// який містить функцію для знаходження суми елементів масиву чисел.

function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

export default sum