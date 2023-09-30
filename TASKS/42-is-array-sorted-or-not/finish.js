/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

const arraySortInfo = (inputArray) => {
    let message = "";

    if (inputArray.some((element) => typeof element !== "number")) {
        message = "array have element typeof string";
    } else if (
        inputArray.every(
            (element, index) => index === 0 || element >= inputArray[index - 1]
        )
    ) {
        message = "array filter from least to most";
    } else if (
        inputArray.every(
            (element, index) => index === 0 || element <= inputArray[index - 1]
        )
    ) {
        message = "array filter from most to least";
    } else {
        message = "array not have filter";
    }

    return message;
};

// console.log(arraySortInfo(a)); // Некоторые элементы не являются числами
// console.log(arraySortInfo(b)); // Массив отсортирован по возрастанию
// console.log(arraySortInfo(c)); // Массив отсортирован по убыванию
// console.log(arraySortInfo(d)); // Массив не отсортирован

// version 2

const multiArr = [a, b, c, d];

const arraysSortInfo = (multiArr) => {
    multiArr.forEach((el) => {
        if (el.some((item) => typeof item == "string")) {
            console.log(`this array [${el}] have string element`);
        } else if (
            el.every((item, index) => index === 0 || item >= el[index - 1])
        ) {
            console.log(`this array [${el}] sort from least to most`);
        } else if (
            el.every((item, index) => index === 0 || item <= el[index - 1])
        ) {
            console.log(`this array [${el}] sort from most to least`);
        } else console.log(`this array [${el}] dont have filter`);
    });
};

// arraysSortInfo(multiArr);

// v3
// first sort arr and before === true or false

const sortedArr = (arr) => {
    const newArray = [...arr];
    const sorting = newArray.sort((a, b) => {
        return a - b;
    });
    return sorting;
};

const checkSort = (arr) => {
    const newArr = sortedArr(arr);

    if (JSON.stringify(newArr) === JSON.stringify(arr)) {
        console.log(`${arr} sort from to most`);
    } else if (
        JSON.stringify(newArr) === JSON.stringify(arr.slice().reverse())
    ) {
        console.log(`${arr} sort from to least`);
    } else {
        console.log(`${arr} dont have sort`);
    }
};

// and update arraysSortInfo
const arraysSortInfo2 = (multiArr) => {
    for (const el of multiArr) {
        if (el.some((item) => typeof item == "string")) {
            console.log(`${el} have string elements`);
        } else {
            checkSort(el);
        }
    }
};

arraysSortInfo2(multiArr);

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
