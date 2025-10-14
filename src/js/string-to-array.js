// який містить функцію для перетворення рядка в масив за допомогою певного роздільника.

export const stringToArray = (str, separator) => {
  return str.split(separator);
} // Іменований експорт

export const test = () => {
    console.log("test");
}
// При іменованому експорті ми можемо відправляти кілька сутностей з одного файла
