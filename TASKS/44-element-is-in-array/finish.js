/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */

const transports = ["Bus", "Car", "Bicycle", "Airplane"];

const isElementInArray = (inputArray, searchElement) => {
    const result = inputArray.find((el) => {
        return el === searchElement;
    });

    if (result !== undefined) {
        return `array heve this item: ${searchElement} `;
    } else {
        return `array dont have this item: ${searchElement}`;
    }
};

// includes come back true or false this el have array
function isElementInArray2(inputArray, searchElement) {
    return inputArray.includes(searchElement);
}

console.log(isElementInArray(transports, "Bus")); // true
console.log(isElementInArray(transports, "Phone")); // false
console.log(isElementInArray(transports, "Airplane")); // true

console.log(isElementInArray2(transports, "Bus")); // true
console.log(isElementInArray2(transports, "Phone")); // false
console.log(isElementInArray2(transports, "Airplane")); // true
