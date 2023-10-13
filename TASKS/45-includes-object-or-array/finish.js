/** ЗАДАЧА 45 - Поиск элементов в массивах
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "searchElement" и "inputArray"
 *
 * 2. Если "searchElement" - не объект, просто используйте метод "includes"
 *
 * 3. Если "searchElement" - это объект или массив,
 * вам необходимо сначала преобразовать каждый элемент "inputArray" в строку,
 * а затем применить метод "includes" с аргументом, который также будет преобразован в строку
 */

const tags = [
    ["javascript", "es6"],
    ["css", "flexbox"],
    ["html", "web-browser"],
];

const fruits = [
    { title: "Orange", quantity: 10 },
    { title: "Banana", quantity: 5 },
    { title: "Apple", quantity: 25 },
];

const primitiveTypesArray = [25, "x", true, undefined, null];

const isElementInArray = (searchElement, inputArray) => {
    if (inputArray.every((item) => Array.isArray(item))) {
        return inputArray.some(
            (item) =>
                item.length === searchElement.length &&
                item.every((el, index) => el === searchElement[index])
        );
    }

    if (inputArray.every((item) => typeof item === "object")) {
        return inputArray.some((item) => {
            return JSON.stringify(item) === JSON.stringify(searchElement);
        });
    }

    return inputArray.some((item) => {
        return item === searchElement;
    });
};

console.log(isElementInArray(["css", "flexbox"], tags)); // true

console.log(isElementInArray(["flexbox", "css"], tags)); // false

console.log(isElementInArray({ title: "Apple", quantity: 25 }, fruits)); // true

console.log(isElementInArray({ title: "Banana" }, fruits)); // false

console.log(isElementInArray(25, primitiveTypesArray)); // true

// цей просто перевірить чи є елемент в масиві тобто на прикладі
// спрацює для цього завдання
// console.log(isElementInArray(25, primitiveTypesArray)); // true
// масив має просіти елементи (ні масиви ні об'єкти)
// також шукаємо простий елемент 25

// return inputArray.include(searchElement);

// пишемо більш компактно для пошуку інших елементів в масиві

//  return inputArray
// .map((element) => JSON.stringify(element))
// .includes(JSON.stringify(searchElement))
